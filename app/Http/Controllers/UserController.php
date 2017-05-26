<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use App\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $request = request();        
        if (request()->has('sort')) {
            list($sortCol, $sortDir) = explode('|', request()->sort);
            $query = User::orderBy($sortCol, $sortDir);
        } else {
            $query = User::orderBy('id', 'asc');
        }
        if ($request->exists('filter')) {
            $query->where(function($q) use($request) {
                $value = "%{$request->filter}%";
                $q->where('name', 'like', $value)
                    
                    ->orWhere('email', 'like', $value);
            });
        }
        $perPage = request()->has('per_page') ? (int) request()->per_page : null;
        return response()->json(
                $query->paginate($perPage)
            )
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET');        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {     
        $input = $request->all();

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:15',
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(),400);            
        }

        $create = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);
         return response($create);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        if (!empty($user)){
            return response($user);    
        }else{            
            return response()->json(['Falha ao inserir os dados' => 'Informação não existe , não será possivel exibir'], 400); // Status code here
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);
        if (!empty($user)){
            return response($user);    
        }else{            
            return response()->json(['Falha ao inserir os dados' => 'Informação não existe , não será possivel editar'], 400); // Status code here
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $user = $request->user();

            $this->validate($request, [
                'name' => 'required',
                'email' => 'required|email|unique:users,email,'.$user->id,
            ]);

            $user->update($request->only('name', 'email'));

            return $user;
        } catch (QueryException $e) {
            //dd($e->getMessage());
            return response()->json(['Falha ao atualizar os dados' => $e->getMessage()], 500); // Status code here
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            return User::where('id',$id)->delete();
        } catch (QueryException $e) {            
            return response()->json(['Falha ao excluir os dados' => $e->getMessage()], 500); // Status code here
        }
    }
}

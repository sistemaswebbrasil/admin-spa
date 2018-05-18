<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\APIBaseController as APIBaseController;
use App\Mesa;
use Validator;

class MesaAPIController extends APIBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mesas = Mesa::orderBy('numero')->get();
        return $this->sendResponse($mesas->toArray(), 'Mesas retrieved successfully.');
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
        $validator = Validator::make($input, [
            'numero' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }
        $mesa = Mesa::create($input);
        return $this->sendResponse($mesa->toArray(), 'Mesa created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $mesa = Mesa::find($id);
        if (is_null($mesa)) {
            return $this->sendError('Mesa não encontrado');
        }
        //return response()->json($mesa->toArray(), 200);
        return $this->sendResponse($mesa->toArray(), 'Mesa retrieved successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showByEmail($email)
    {
        $mesa = Mesa::where('email', $email)->get(); //Mesa::find($id);
        if (is_null($mesa)) {
            return $this->sendError('Mesa não encontrado');
        }
        //return response()->json($mesa->toArray(), 200);
        return $this->sendResponse($mesa->toArray(), 'Email encontrado.');
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
        $input = $request->all();
        $validator = Validator::make($input, [
            'numero' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }
        $mesa = Mesa::find($id);
        $mesa->update($input);




        return $this->sendResponse($mesa, 'Mesa Atualizado com sucesso.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mesa = Mesa::find($id);
        if (is_null($mesa)) {
            return $this->sendError('Mesa não encontrado');
        }
        $mesa->delete();
        return $this->sendResponse($id, 'Mesa excluido com sucesso.');
    }
}

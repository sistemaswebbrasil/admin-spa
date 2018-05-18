<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\APIBaseController as APIBaseController;
use App\Pedido;
use Validator;

class PedidoAPIController extends APIBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pedidos = Pedido::orderBy('numero')->get();
        return $this->sendResponse($pedidos->toArray(), 'Pedidos retrieved successfully.');
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
        $pedido = Pedido::create($input);
        return $this->sendResponse($pedido->toArray(), 'Pedido created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pedido = Pedido::find($id);
        if (is_null($pedido)) {
            return $this->sendError('Pedido não encontrado');
        }
        //return response()->json($pedido->toArray(), 200);
        return $this->sendResponse($pedido->toArray(), 'Pedido retrieved successfully.');
    }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function showByMesa($mesa)
    // {
    //     $pedido = Pedido::where(['id_mesa'=> $mesa,'situacao'=>1])->get(); //Pedido::find($id);
    //     if (is_null($pedido)) {
    //         return $this->sendError('Pedido não encontrado');
    //     }
    //     //return response()->json($pedido->toArray(), 200);
    //     return $this->sendResponse($pedido->toArray(), 'Pedido encontrado.');
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showByMesa($mesa)
    {
        // $pedidos = Pedido::where(['id_mesa' => $mesa, 'situacao' => 1])->get(); //Pedido::find($id);



        $pedidos = Pedido::groupBy('cod', 'nome', 'preco')
            ->selectRaw('nome,preco, sum(qtd) as qtd,sum(preco) as preco')
            ->where(['id_mesa' => $mesa, 'situacao' => 1])
            ->get();

        // SUM(qtd) as qt
        // SUM(preco) as pr

        if (is_null($pedidos)) {
            return $this->sendError('Pedido não encontrado');
        }
        //return response()->json($pedido->toArray(), 200);
        return $this->sendResponse($pedidos->toArray(), 'Pedido encontrado.');
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
        $pedido = Pedido::find($id);
        $pedido->update($input);




        return $this->sendResponse($pedido, 'Pedido Atualizado com sucesso.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pedido = Pedido::find($id);
        if (is_null($pedido)) {
            return $this->sendError('Pedido não encontrado');
        }
        $pedido->delete();
        return $this->sendResponse($id, 'Pedido excluido com sucesso.');
    }
}

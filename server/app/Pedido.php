<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'cod', 'nome', 'preco', 'qtd', 'comanda', 'data', 'time', 'id_mesa', 'situacao', 'idGarcon', 'status', 'destino', 'entregue', 'feito'
    ];

    protected $primaryKey = 'id';

    protected $table = 'tbl_carrinho';
}

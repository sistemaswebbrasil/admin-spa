<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Mesa extends Model
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'numero', 'idGarcon', 'situacao',
    ];

    protected $primaryKey = 'id_mesa';

    protected $table = 'mesa';
}

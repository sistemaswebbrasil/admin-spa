<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'API\AuthAPIController@register');
Route::post('login', 'API\AuthAPIController@login');
Route::post('recover', 'API\AuthAPIController@recover');
Route::group(['middleware' => ['jwt.auth']], function () {
    Route::get('logout', 'API\AuthAPIController@logout');
    Route::resource('users', 'API\UserAPIController');
});

Route::resource('contacts', 'API\ContactAPIController');
// Route::get('contacts/by-email/{email}', 'API\ContactAPIController@showByEmail');
Route::get('contacts/by-email/{email}', 'API\ContactAPIController@showByEmail')->name('contacts.showByEmail');

Route::resource('mesas', 'API\MesaAPIController');
Route::resource('pedidos', 'API\PedidoAPIController');
Route::get('pedidos/{mesa}/mesa', 'API\PedidoAPIController@showByMesa')->name('pedidos.showByMesa');

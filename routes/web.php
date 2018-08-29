<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


$router->group(['namespace' => 'API', 'prefix' => 'api', 'middleware' => ['auth']], function() {
    $router->get('/version', function () use ($router) {
    	return $router->app->version();
    });
    $router->get('/number/index', 'numberController@index')->name('number.index');
    $router->post('/number/store', 'numberController@store')->name('number.store');
    $router->post('/number/assign', 'numberController@store')->name('number.store');
    $router->post('/number/{number}/update', 'numberController@update')->name('number.update');
    $router->get('/number/{number}/history', 'numberController@history')->name('number.history');
});
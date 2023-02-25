<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/#
Route::post('/test', function() {
    return response()->json(['test' => 'post e']);
});

Route::get('/test', function() {
    return view('test e');
});

Route::get('/users', function() {
    return response()->json([
        [
            'id' => 1,
            'name' => 'test',
        ],
        [
            'id' => 2,
            'name' => '2test2'
        ],
        [
            'id' => 3,
            'name' => 'qweqw'
        ]
    ]);
});

Route::get('/login', function() {
    return response()->json(['login' => 'get e ']);
});


Route::get('/', function() {
    return view('welcome');
});


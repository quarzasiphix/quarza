<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;

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

Route::get('/doc', function() {
    return view('doc');
});

Route::get('/', function() {
    return view('welcome');
});

Route::post('/test', function() {
    return response()->json(['test' => 'post e']);
});

Route::get('/users', function() {
    return view('users');
});

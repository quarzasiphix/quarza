<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\productsController;
use App\Http\Controllers\workoutsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [productsController::class, 'index']);
Route::prefix('/product')->group( function() {
    Route::post('/store', [productsController::class, 'store']);
});


Route::get('/items', [ItemController::class, 'index']);
Route::prefix('/item')->group( function() {
    Route::post('/store', [ItemController::class, 'store']);
    Route::put('/{id}', [ItemController::class, 'update']);
});

Route::get('/workouts', [workoutsController::class, 'index']);
Route::prefix('/workout')->group( function() {
    Route::post('/store', [workoutsController::class, 'store']);
    Route::delete('/{time}', [workoutsController::class, 'destroy']);
});


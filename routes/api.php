<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\PaymentGateways\OpenPayController;
use App\Http\Controllers\PaymentGateways\DLocalGoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/payments', [PaymentsController::class, 'getPayments']);
Route::post('/payments', [PaymentsController::class, 'store']);


Route::post('/pay/openpay', [OpenPayController::class, 'store']);

//DLocalGO
Route::post('/pay/dlgo', [DLocalGoController::class, 'store']);




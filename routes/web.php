<?php

use App\Http\Controllers\PaymentsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PaymentGateways\PayUController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/dashboard/payments', [PaymentsController::class, 'index']);
    Route::get('/dashboard/payments/create', [PaymentsController::class, 'create']);
});

Route::get('/payment_link/{reference_code}', [PaymentsController::class, 'paymentLink']);
Route::post('/process-payment-culqi', [PaymentsController::class, 'processPaymentCulqi']);
//Pay U Latam
Route::get('/pay/payu', [PayUController::class, 'confirm']);


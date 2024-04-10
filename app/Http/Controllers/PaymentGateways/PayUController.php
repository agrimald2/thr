<?php

namespace App\Http\Controllers\PaymentGateways;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Controllers\PaymentsController;
use Log;

class PayUController extends Controller
{
    public function store(Request $request)
    {
        Log::info($request);
        if ($request->state_pol == 4) {
            Log::info($request->reference_sale);
            $paymentsController = new PaymentsController();

            $paymentsController->markAsPaid($request->reference_sale);
        }

    }
}
<?php

namespace App\Http\Controllers\PaymentGateways;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
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

            $paymentsController->setAsPaid($request->reference_sale);
        }

    }

    public function confirm(Request $request)
    {
        Log::info($request);
        if ($request->transactionState == 4) {
            Log::info($request->reference_sale);
            $paymentsController = new PaymentsController();

            $paymentsController->setAsPaid($request->reference_sale);

            return Redirect::to(url("/payment_link/{$request->reference_sale}"));
        }

    }
}
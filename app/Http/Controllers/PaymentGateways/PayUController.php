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

        // if ($decoded->status == "PAID") {
        //     Log::info($decoded->order_id);
        //     $paymentsController = new PaymentsController();

        //     $paymentsController->markAsPaid($decoded->order_id);
        // }

    }
}
<?php

namespace App\Http\Controllers\PaymentGateways;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\PaymentsController;
use Log;


class DLocalGoController extends Controller
{
    public function store(Request $request)
    {

        Log::info($request);

        // $paymentsController = new PaymentsController();

        // $paymentsController->markAsPaid($request->payment_id);

        // return response()->json([
        //     'data' => $charge->id
        // ]);

    }
}

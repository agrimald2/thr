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

        $envApiKey = '1_DLGO_API_KEY';
        $envSecretKey = '1_DLGO_SECRET_KEY';

        $apiKey = env($envApiKey);
        $secretKey = env($envSecretKey);

        Log::info($request->payment_id);

        $curl = curl_init();

        curl_setopt_array(
            $curl,
            array(
                CURLOPT_URL => "https://api-sbx.dlocalgo.com/v1/payments/" . $request->payment_id,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30000,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "authorization: Bearer " . $apiKey . ":" . $secretKey,
                    "content-type: application/json",
                ),
            )
        );

        $response = curl_exec($curl);
        $err = curl_error($curl);

        Log::info($response);
        Log::info($err);

        curl_close($curl);


        // $paymentsController = new PaymentsController();

        // $paymentsController->markAsPaid($request->payment_id);

        // return response()->json([
        //     'data' => $charge->id
        // ]);

    }
}

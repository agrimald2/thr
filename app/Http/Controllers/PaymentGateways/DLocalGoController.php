<?php

namespace App\Http\Controllers\PaymentGateways;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\PaymentsController;
use Log;


class DLocalGoController extends Controller
{
    public function store(Request $request)
    {
        $production_mode = env($account_id . '_DLGO_PRODUCTION_MODE');
        $envApiKey = '2_DLGO_API_KEY';
        $envSecretKey = '2_DLGO_SECRET_KEY';

        $apiKey = env($envApiKey);
        $secretKey = env($envSecretKey);

        $curl = curl_init();

        $url = 'https://api-sbx.dlocalgo.com/v1/payments';

        if($production_mode){
            $url = 'https://api.dlocalgo.com/v1/payments';
        }

        curl_setopt_array(
            $curl,
            array(
                CURLOPT_URL => $url . $request->payment_id,
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

        curl_close($curl);

        $decoded = json_decode($response);

        if ($decoded->status == "PAID") {
            $paymentsController = new PaymentsController();
            $paymentsController->setAsPaid($decoded->order_id);
        }
    }

    public function confirm(Request $request)
    {
        Log::info($request);
        if ($request->status == "PAID") {
            $paymentsController = new PaymentsController();

            $paymentsController->setAsPaid($request->order_id);

            return Redirect::to(url("/payment_link/{$request->order_id}"));
        }

        if ($request->status == "PENDING") {
            $paymentsController = new PaymentsController();

            $paymentsController->setAsPaid($request->order_id);

            return Redirect::to(url("/payment_link/{$request->order_id}"));
        }
    }
}

<?php

namespace App\Http\Controllers\PaymentGateways;

use Illuminate\Http\Request;

use Openpay\Data\Openpay;
use Exception;
use OpenpayApiError;
use OpenpayApiAuthError;
use OpenpayApiRequestError;
use OpenpayApiConnectionError;
use OpenpayApiTransactionError;
use Illuminate\Http\JsonResponse;

use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

use App\Http\Controllers\PaymentsController;

class OpenPayController extends Controller
{

    public function store(Request $request)
    {
        try {
            // create instance OpenPay
            $secret_key =  $request->account_id . '_OP_SECRET_KEY';
            $merchant_id_key = $request->account_id . '_OP_MERCHANT_ID';        
            $public_key = $request->account_id . '_OP_PUBLIC_KEY';
            $openpay = Openpay::getInstance(env($merchant_id_key), env($secret_key), 'PE');
            
            Openpay::setProductionMode(env('VITE_OP_PRODUCTION_MODE'));
            
            // create object customer
            $customer = array(
                'name' => $request->name,
                'last_name' => $request->last_name,
                'email' => $request->email
            );

            Log::warning($request->token); 

            // create object charge
            $chargeRequest =  array(
                'method' => 'card',
                'source_id' => $request->token,
                'amount' => $request->amount,
                'currency' => $request->currency,
                'description' => $request->description,
                'device_session_id' => $request->deviceSessionId,
                'customer' => $customer,
                'redirect_url' => 'https://google.com'
            );
            
            
            $charge = $openpay->charges->create($chargeRequest);

            $paymentsController = new PaymentsController();

            $paymentsController->markAsPaid($request->payment_id);

            return response()->json([
                'data' => $charge->id
            ]);

        } catch (OpenpayApiTransactionError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId(),
                ]
            ]);
        } catch (OpenpayApiRequestError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId(),
                ]
            ]);
        } catch (OpenpayApiConnectionError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId(),
                ]
            ]);
        } catch (OpenpayApiAuthError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId(),
                    'request_id' => $e->getRequestId(),
                ]
            ]);
        } catch (OpenpayApiError $e) {
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId(),
                ]
            ]);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json([
                'error' => [
                    'category' => $e->getCategory(),
                    'error_code' => $e->getErrorCode(),
                    'description' => $e->getMessage(),
                    'http_code' => $e->getHttpCode(),
                    'request_id' => $e->getRequestId(),
                    'new_description' => $e->getDescription()
                ]
            ]);
        }
    }
}


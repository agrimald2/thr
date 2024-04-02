<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Currency;
use App\Models\Payment;
use Culqi\Culqi;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Log;

class PaymentsController extends Controller
{
    public function index()
    {
        return Inertia::render('Payments/Index');
    }

    public function getPayments()
    {
        $payments = Payment::with('account')->get();
        return response()->json($payments);
    }

    public function create()
    {
        $accounts = Account::all();
        $currencies = Currency::all();
        return Inertia::render('Payments/Create', ['accounts' => $accounts, 'currencies' => $currencies]);
    }

    public function store(Request $request)
    {
        Log::info($request);

        $validatedData = $request->validate([
            'amount_usd' => 'required|numeric',
            'currency' => 'required|string',
            'description' => 'nullable|string',
            'billed' => 'sometimes|boolean',
            'redirect_link' => 'nullable|url',
            'created_by' => 'nullable|string',
        ]);

        // Get a random account if account_id is not provided
        if (!$request->filled('account_id')) {
            $account = $this->getRandomAccount();
            $validatedData['account_id'] = $account->id;
            $validatedData['payment_gateway'] = $account->payment_gateway;
        } else {
            $validatedData['account_id'] = $request->input('account_id');
            $account = Account::find($validatedData['account_id']);
            $validatedData['payment_gateway'] = $account->payment_gateway;
        }

        // Calculate the amount in the specified currency if it is not USD
        $currency = Currency::where('abbreviation', $validatedData['currency'])->first();
        if ($currency && $validatedData['currency'] !== 'USD') {
            $validatedData['amount'] = $validatedData['amount_usd'] * $currency->tc;
        } else {
            $validatedData['amount'] = $validatedData['amount_usd'];
        }

        // Remove payment_date from the validated data as it should not be stored
        unset($validatedData['payment_date']);

        $payment = new Payment($validatedData);
        $payment->save();

        // Include id in the reference code and update the payment
        $payment->reference_code = $request->input('reference_code', $this->getReferenceCode($payment->id));
        $payment->save();

        return response()->json(['message' => 'Payment created successfully', 'payment' => $payment], 201);
    }

    public function getRandomAccount()
    {
        return Account::where('is_active', true)->inRandomOrder()->first();
    }

    public function getReferenceCode($paymentId)
    {
        return 'RC-' . strtoupper(Str::random(10)) . '-' . $paymentId;
    }

    public function paymentLink($reference_code)
    {
        $payment = Payment::where('reference_code', $reference_code)->firstOrFail();

        if (!$payment) {
            return response()->json(['message' => 'Payment not found'], 404);
        }

        if ($payment->status === 'paid') {
            return Inertia::render('Pay/Payed', ['payment' => $payment]);
        }

        $account = $payment->account()->firstOrFail();
        $paymentGateway = $account->payment_gateway;

        switch ($paymentGateway) {
            case 'OP':
                return $this->renderOpenPayPaymentView($account->id, $payment);
            case 'MP':
                return $this->renderMercadoPagoPaymentView($account->id, $payment);
            case 'DLGO':
                return $this->renderDLocalGOPaymentView($account->id, $payment);
            case 'CQ':
                return $this->renderCulquiPaymentView($account->id, $payment);
            case 'PU':
                    return $this->renderCulquiPaymentView($account->id, $payment);
            case 'RB':
                return $this->renderRebillPaymentView($account->id, $payment);
            default:
                return response()->json(['message' => 'Payment gateway not supported'], 400);
        }
    }

    public function renderOpenPayPaymentView($account_id, $payment)
    {
        $merchantIdKey = $account_id . '_OP_MERCHANT_ID';
        $publicKeyKey = $account_id . '_OP_PUBLIC_KEY';
        
        $merchantId = env($merchantIdKey);
        $publicKey = env($publicKeyKey);

        Log::info("MERCHANT");
        Log::info($merchantId);
        Log::info($publicKey);

        if (!$merchantId || !$publicKey) {
            return response()->json(['message' => 'OpenPay credentials not found'], 500);
        }

        return Inertia::render('Pay/Openpay', [
            'merchantId' => $merchantId,
            'publicKey' => $publicKey,
            'payment' => $payment,
        ]);
    }

    public function renderMercadoPagoPaymentView($account_id, $payment)
    {
        $merchantIdKey = $account_id . '_OP_MERCHANT_ID';
        $publicKeyKey = $account_id . '_OP_PUBLIC_KEY';
        $merchantId = env($merchantIdKey);
        $publicKey = env($publicKeyKey);

        return Inertia::render('Pay/MercadoPago', [
            'merchantId' => $merchantId,
            'publicKey' => $publicKey,
            'payment' => $payment,
        ]);
    }

    public function renderDLocalGOPaymentView()
    {

    }

    public function renderCulquiPaymentView($account_id, $payment)
    {
        $publicKeyKey = $account_id . '_CQ_PUBLIC_KEY';
        $publicKey = env($publicKeyKey);

        $amount = $payment->amount * 100;

        return Inertia::render('Pay/Culqi2', [
            'publicKey' => $publicKey,
            'payment' => $payment,
            'amount' => $amount,
        ]);
    }

    public function renderRebillPaymentView($account_id, $payment)
    {
        $organization_id_env = $account_id . '_RB_ORGANIZATION_ID';
        $api_key_env = $account_id . '_RB_API_KEY';
        
        $organization_id = env($organization_id_env);
        $api_key = env($api_key_env);

        $amount = $payment->amount;

        $customer = [
            'firstName' => "John",
            'lastName' => "Doe",
            'email' => 'john@doe.com',
            'phone' => [
                'countryCode' => "54",
                'areaCode' => "11",
                'phoneNumber' => "1122530654"
            ],
            'birthday' => "13-01-1989",
            'taxId' => [
                'type' => "CUIT",
                'value' => "20940000019"
            ],
            'personalId' => [
                'type' => "DNI",
                'value' => "94000001"
            ],
            'address' => [
                'street' => "Riverside St.",
                'number' => "102",
                'floor' => "2",
                'apt' => "B",
                'city' => "New York City",
                'state' => "FL",
                'zipCode' => "90210",
                'country' => "USA",
                'description' => "Home / Office"
            ]
        ];
        
        return Inertia::render('Pay/Rebill', [
            'organization_id' => $organization_id,
            'api_key' => $api_key,
            'amount' => $amount,
            'customer' => $customer,
            'payment' => $payment
        ]);
    }

    public function renderPayUPaymentView($account_id, $payment)
    {
        $publicKeyKey = $account_id . '_CQ_PUBLIC_KEY';
        $publicKey = env($publicKeyKey);

        $amount = $payment->amount * 100;

        return Inertia::render('Pay/Culqi2', [
            'publicKey' => $publicKey,
            'payment' => $payment,
            'amount' => $amount,
        ]);
    }

    public function processPaymentCulqi(Request $request)
    {

        $payment = Payment::where('reference_code', $request->orderId)->first();
        $amount = $payment->amount * 100;

        $privateKey = env($payment->account_id . '_CQ_SECRET_KEY');

        try {
            $token = $request->input('token');

            // Configurar las credenciales de Culqi (clave secreta)
            $culqi = new Culqi([
                'api_key' => $privateKey,
            ]);


            $charge = $culqi->Charges->create(
                array(
                    'amount' => $amount,
                    'currency_code' => $payment->currency,
                    'description' => 'Pago demo',
                    'email' => 'usuario@example.com',
                    'source_id' => $request->input('token'),
                )
            );

           if ($charge->outcome->type === 'venta_exitosa') {
            $this->markAsPaid($payment->id);
                return response()->json(['success' => true, 'message' => 'Pago exitoso']);
            } else {
                // El pago no fue exitoso, puedes manejar esta situación según tus necesidades
                return response()->json(['success' => false, 'message' => 'El pago no fue exitoso']);
            }
        } catch (\Culqi\Exception\InapplicableObject $e) {
            // Hubo un error al procesar el pago
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function markAsPaid($payment_id)
    {
        $payment = Payment::findOrFail($payment_id);
        $payment->update([
            'payment_date' => now(),
            'status' => 'paid',
        ]);
    }
}

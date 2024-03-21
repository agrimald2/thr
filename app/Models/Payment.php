<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'account_id',
        'amount',
        'currency',
        'payment_gateway',
        'reference_code',
        'amount_usd',
        'description',
        'status',
        'payment_date',
        'billed',
        'redirect_link',
        'created_by',
    ];

    /**
     * Get the account that owns the payment.
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}

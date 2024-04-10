<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'abbreviation', 'legal_representative', 'email', 'password', 'phone', 'payment_gateway', 'is_active'];
}


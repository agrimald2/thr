<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Account;
use App\Models\PaymentGateway;
use App\Models\Currency;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'password' => bcrypt('123456789'), // Use bcrypt to hash the password
        ]);

        \App\Models\Account::create([
            'legal_representative' => 'TESTER',
            'email' => 'test@test.com',
            'password' => '12345689', // Password is not hashed as per the instructions
            'phone' => '934094501',
            'payment_gateway' => 'OP',
        ]);

        \App\Models\PaymentGateway::insert([
            ['name' => 'OPENPAY', 'abbreviation' => 'OP'],
            ['name' => 'MERCADOPAGO', 'abbreviation' => 'MP'],
        ]);
    
        \App\Models\Currency::insert([
            ['name' => 'AMERICAN DOLLAR', 'abbreviation' => 'USD', 'tc' => 1],
            ['name' => 'PERUVIAN SOL', 'abbreviation' => 'PEN', 'tc' => 3.7],
        ]);
    }
}

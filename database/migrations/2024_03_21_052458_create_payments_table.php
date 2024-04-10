<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('reference_code')->unique()->nullable();
            $table->decimal('amount_usd', 15, 2);
            $table->string('currency')->default('USD');
            $table->decimal('amount', 15, 2);
            $table->text('description')->nullable();
            $table->string('payment_gateway');
            $table->integer('account_id');
            $table->string('status')->default('pending');
            $table->timestamp('payment_date')->nullable();
            $table->boolean('billed')->default(false);
            $table->string('redirect_link')->nullable();
            $table->string('created_by')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('selling', function (Blueprint $table) {
            $table->id();

            $table->date('date')->nullable();
            $table->string('customer_name')->nullable();
            $table->string('emp_name')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('selling_detail', function (Blueprint $table) {
            $table->id();

            $table->foreignId('selling_id')->constrained('selling');
            $table->foreignId('product_id')->constrained('product');
            $table->integer('price');
            $table->integer('qty');

            $table->timestamps();
            $table->softDeletes();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('selling_detail');
        Schema::dropIfExists('selling');
    }
};

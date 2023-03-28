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
        Schema::create('product_category', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
            $table->softDeletes();

        });

        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('desc');
            $table->foreignId('category_id')->nullable()->constrained('product_category');

            $table->timestamps();
            $table->softDeletes();

        });

        Schema::create('product_component', function (Blueprint $table) {
            $table->id();
            $table->foreignId('component_id')->constrained('component');
            $table->foreignId('product_id')->constrained('product');

            $table->integer('cost')->default(0);
            $table->integer('qty')->default(1);

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
        Schema::dropIfExists('product_component');
        Schema::dropIfExists('product');
        Schema::dropIfExists('product_category');
    }
};

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
        //
        Schema::table('animals', function (Blueprint $table) {
            $table->string('origin')->after('sex');
            $table->string('desc')->after('name');

            // $table->id();
            // $table->string('desc');
            // $table->uuid('desc');
            // $table->integer('desc');
            // $table->smallInteger('desc');
            // $table->text('desc');
            // $table->longText('desc');
            // $table->date('desc');
            // $table->dateTime('desc');

            // $table->string('desc')->nullable();
            // $table->string('desc')->default('hello');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('animals', function (Blueprint $table) {
            $table->dropColumn('origin');
            $table->dropColumn('desc');
        });

    }
};

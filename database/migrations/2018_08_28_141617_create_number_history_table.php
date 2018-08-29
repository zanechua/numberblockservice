<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNumberHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('number_history', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('number_id')->unsigned();
            $table->foreign('number_id')->references('id')->on('numbers');
            $table->integer('customer_id')->unsigned();
//            $table->foreign('customer_id')->references('id')->on('customers');
            $table->integer('action_id')->unsigned();
            $table->foreign('action_id')->references('id')->on('number_action');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('number_history');
    }
}

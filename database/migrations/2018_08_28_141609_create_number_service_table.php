<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNumberServiceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('number_service', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('number_id')->unsigned();
            $table->foreign('number_id')->references('id')->on('numbers');
            $table->integer('service_id')->unsigned();
//            $table->foreign('service_id')->references('id')->on('services');
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
        Schema::dropIfExists('number_service');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDestinationSubsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('destination_subs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('destination_header_id');
            $table->foreign('destination_header_id')->references('id')->on('destination_headers')->onDelete('cascade')->onUpdate('cascade');
            $table->string('name');
            $table->string('rate');
            $table->string('created_by')->nullable();
            $table->string('modified_by')->nullable();
            $table->timestamp('deleted_at')->nullable();
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
        Schema::dropIfExists('destination_subs');
    }
}

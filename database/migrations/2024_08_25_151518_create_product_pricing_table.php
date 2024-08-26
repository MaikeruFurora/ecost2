<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductPricingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_pricing', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id')->unsigned();
            $table->integer('warehouse_id')->unsigned();
            $table->integer('tax_code_id')->unsigned();
            $table->integer('company_id')->unsigned();
            $table->integer('form_id')->unsigned();
            $table->decimal('pickup_price', 10, 2);
            $table->decimal('volume_price', 10, 2)->nullable();
            $table->decimal('retail_price', 10, 2)->nullable();
            $table->integer('created_by')->unsigned();
            $table->integer('modified_by')->unsigned();
            $table->timestamp('deleted_at')->nullable();
            $table->timestamps(); // includes created_at and updated_at
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_pricing');
    }
}

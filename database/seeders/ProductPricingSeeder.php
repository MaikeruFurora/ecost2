<?php

namespace Database\Seeders;

use App\Models\ProductPricing;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ProductPricingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return ProductPricing::insert([
            [
                
                'product_id'  => 1,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            // TAXT E

            [
                'product_id'  => 1,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            //  OTHER COMPANY
            
            [
                'product_id'  => 1,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            // OTHER COMPANY OVAT- E STATEMENT

            [
                'product_id'  => 1,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 1,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            /**
             * 
             * ALUMINUM SULFATE
             * 
             */
            
             [
                
                'product_id'  => 2,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            // TAXT E

            [
                'product_id'  => 2,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            //  OTHER COMPANY
            
            [
                'product_id'  => 2,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            // OTHER COMPANY OVAT- E STATEMENT

            [
                'product_id'  => 2,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 2,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            /**
             * 
             * 
             *  SAPONIFICATION POWDER 50 KLS - CHINA
             * 
             * 
             */

             [
                
                'product_id'  => 3,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            // TAXT E

            [
                'product_id'  => 3,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            //  OTHER COMPANY
            
            [
                'product_id'  => 3,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            // OTHER COMPANY OVAT- E STATEMENT

            [
                'product_id'  => 3,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 3,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            /***
             * 
             * 
             * SAPONIFICATION POWDER 50 KLS // CHONGQING
             * 
             */

             [
                
                'product_id'  => 4,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1,
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 1, // OVAT-C
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            // TAXT E

            [
                'product_id'  => 4,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 1, // ARVIN - MAIN
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            //  OTHER COMPANY
            
            [
                'product_id'  => 4,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 1, // INVOICE
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],

            // OTHER COMPANY OVAT- E STATEMENT

            [
                'product_id'  => 4,
                'warehouse_id'=> 2, // BATAAN
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 3, // CALACA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 7, // HARBOUR
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 8, // MALABON
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 9, // PAMPANGA
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
            [
                'product_id'  => 4,
                'warehouse_id'=> 10, // PNOC
                'tax_code_id' => 2, // OVAT-E
                'company_id'  => 2, // RH - OTHER COMPANY
                'form_id'     => 2, // STATEMENT
                'pickup_price'=> 100,
                'volume_price'=> 99,
                'retail_price'=> 50,
                'created_by'  => 1, 
                'modified_by' => 1,
                'created_at'  => Carbon::now(),                
                'updated_at'  => Carbon::now(),
            ],
        ]);
    }
}

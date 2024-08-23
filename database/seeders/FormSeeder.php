<?php

namespace Database\Seeders;

use App\Models\Form;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class FormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Form::insert([
            [
                'name' => 'INVOICE',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'STATEMENT',
                'created_by' => 1,
                'modified_by' => 1,
                'created_at' => Carbon::now(),                
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}

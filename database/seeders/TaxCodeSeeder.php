<?php

namespace Database\Seeders;

use App\Models\TaxCode;
use Illuminate\Database\Seeder;

class TaxCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return TaxCode::insert([
            ['name' => 'OVAT-C'],
            ['name' => 'OVAT-E'],
        ]);
    }
}

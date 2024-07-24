<?php

namespace Database\Seeders;

use App\Models\Warehouse;
use Illuminate\Database\Seeder;

class WarehouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return Warehouse::insert([
            [
                'name' => 'Bacolod',
                'group' => 'Province',
            ],
            [
                'name' => 'Bataan',
                'group' => 'Manila',
            ],
            [
                'name' => 'Calaca',
                'group' => 'Manila',
            ],
            [
                'name' => 'Cebu',
                'group' => 'Province',
            ],
            [
                'name' => 'Cagayan',
                'group' => 'Province',
            ],
            [
                'name' => 'Davao',
                'group' => 'Province',
            ],
            [
                'name' => 'Harbour',
                'group' => 'Manila',
            ],
            [
                'name' => 'Malabon',
                'group' => 'Manila',
            ],
            [
                'name' => 'Pampanga',
                'group' => 'Manila',
            ],
            [
                'name' => 'PNOC',
                'group' => 'Manila',
            ],
            [
                'name' => 'Zamboanga',
                'group' => 'Province',
            ],
            [
                'name' => 'Surigao',
                'group' => 'Province',
            ],
            [
                'name' => 'Iloilo',
                'group' => 'Province',
            ],
            [
                'name' => 'Gensan',
                'group' => 'Province',
            ],
        ]);
    }
}

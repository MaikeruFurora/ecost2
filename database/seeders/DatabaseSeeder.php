<?php

namespace Database\Seeders;

use App\Models\DestinationHeader;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create();
        $this->call(WarehouseSeeder::class);
        $this->call(TaxCodeSeeder::class);
        $this->call(CompanySeeder::class);
        $this->call(FormSeeder::class);
        $this->call(ProductPriceTypeSeeder::class);
        $this->call(TruckSeeder::class);
        $this->call(DestinationHeaderSeeder::class);
        $this->call(DestinationSubSeeder::class);
    }
}

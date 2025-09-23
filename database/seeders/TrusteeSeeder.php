<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TrusteeSeeder extends Seeder
{
    public function run(): void
    {
        $members = [
            [ 'image' => '../bot3.jpeg', 'name' => 'Dr. Akinyele Akinlade', 'position' => 'Chairman', 'email' => 'akin.akinlade@sjssaa.com', 'order' => 1 ],
            [ 'image' => '../bot4.jpeg', 'name' => 'Mr. Tony Agbuagba', 'position' => 'secretary', 'email' => 'tony.agbuagba@sjssaa.com', 'order' => 2 ],
            [ 'image' => '../bot5.jpeg', 'name' => 'Mr. Kelechukwu Nwankwo', 'position' => 'Member', 'email' => null, 'order' => 3 ],
            [ 'image' => '../martins.png', 'name' => 'Mr. Adewale Martins', 'position' => 'Member', 'email' => null, 'order' => 4 ],
            [ 'image' => '../brayon.png', 'name' => 'Mr. Brayon Emeluwa', 'position' => 'Member', 'email' => null, 'order' => 5 ],
            [ 'image' => '../shosanya.png', 'name' => 'Mr. Olayiwola Shosanya', 'position' => 'Member', 'email' => null, 'order' => 6 ],
            [ 'image' => '../bot2.jpeg', 'name' => 'Mr. John Agwara Onyeukwu', 'position' => 'Member', 'email' => null, 'order' => 7 ],
        ];

        DB::table('trustees')->insert(array_map(function ($m) {
            $m['is_active'] = true;
            $m['created_at'] = now();
            $m['updated_at'] = now();
            return $m;
        }, $members));
    }
}



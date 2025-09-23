<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SetRepresentativeSeeder extends Seeder
{
    public function run(): void
    {
        $seed = [];

        $push = function($set, $order, $position, $name, $email = null, $image = null) use (&$seed) {
            $seed[] = [
                'set' => (string)$set,
                'order' => $order,
                'position' => $position,
                'name' => $name,
                'email' => $email,
                'image' => $image,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        };

        // 1986
        $push('1986', 1, 'chairman', 'Dr. Akinyele Akinlade', 'akin.akinlade@sjssaa.com', '../bot3.jpeg');
        $push('1986', 2, 'Vice Chairman, Nigeria', 'Kolawole Banire');
        $push('1986', 3, 'Vice Chairman, Europe/Asia', 'Hakeem Kehinde');
        $push('1986', 4, 'Vice Chairman, North/South America', 'Prof Godwin Ogbeide');
        $push('1986', 5, 'Secretary', 'Patrick Iloba');
        $push('1986', 6, 'Assistant Secretary', 'Adewunmi Kuye');
        $push('1986', 7, 'Treasurer', 'Kelechukwu Nwankwo');
        $push('1986', 8, 'Social Secretary', 'Waheed Majolagbe');
        $push('1986', 9, 'Publicity Secretary', 'Victor Nwanze');

        // 1987
        $push('1987', 1, 'chairman', 'Tony Agbugba');
        $push('1987', 2, 'Vice Chairman1', 'Andrew Venn');
        $push('1987', 3, 'Vice Chairman2', 'Alika Isreal John');
        $push('1987', 4, 'Secretary', 'Akeem Ajayi');
        $push('1987', 5, 'Assistant Secretary', 'Felix Emueze');
        $push('1987', 6, 'Treasurer', 'KAduragbemi Olurunseun');
        $push('1987', 7, 'Social Secretary', 'Seye Ajayi');

        // 1990
        $push('1990', 1, 'chairman', 'Kelechukwu Onuobia');
        $push('1990', 2, 'Vice Chairman, Nigeria', 'Francis Amedrovi');
        $push('1990', 3, 'Vice Chairman, Dispora', 'Anthony Asekome');
        $push('1990', 4, 'Secretary', 'Sikiru Tiamiyu ');
        $push('1990', 5, 'Assistant Secretary', 'Opeyemi Adefila');
        $push('1990', 6, 'Treasurer', 'Chidi Emmanuel');
        $push('1990', 7, 'Financial Secretary', 'Adetunji Adeniyi');
        $push('1990', 8, 'Social Secretary', 'Calis Albert');
        $push('1990', 9, 'Asst. Social Secretary', 'Tope Ogungbesan');
        $push('1990', 10, 'Publicity Secretary', 'Cyril Ibe');
        $push('1990', 11, 'Asst. Publicity Secretary', 'Josiah Anyanwu');
        $push('1990', 12, 'Legal Adviser 1', 'Barr. Bayo Akinlade');
        $push('1990', 13, 'Legal Adviser 2', 'Hakeem Lasisi');

        // 1992
        $push('1992', 1, 'Chairman ', 'Sunday Isola');
        $push('1992', 2, 'Vice Chairman Nigeria', 'Adenuga  Mike');
        $push('1992', 3, 'Secretary', 'Gbenga  Johnson');
        $push('1992', 4, 'Financial Secretary', 'Jolaosho Adewale');
        $push('1992', 5, 'Social Secretary', 'Olutade Olukunle');
        $push('1992', 6, 'Treasurer', 'Alhaji Aremu Lanre');

        // 2004
        $push('2004', 1, 'Chairman ', 'Onyeche James');
        $push('2004', 2, 'Vice Chairman Nigeria', 'Mba Ekpuagha');
        $push('2004', 3, 'Vice Chairman Europe/Asia', 'Ipadeola Adewale');
        $push('2004', 4, 'Vice Chairman North/South America', 'Salami  Babatunde');
        $push('2004', 5, 'Secretary', 'Chibueze Paul Dike');
        $push('2004', 6, 'Assistant Secretary', 'Eleshin Lateef');
        $push('2004', 7, 'Social Secretary', 'Stephen Venn');
        $push('2004', 8, 'Publicity Secretary', 'Brian Bassey');
        $push('2004', 9, 'Treasurer', 'Victor Nwachukwu');

        // 2009
        $push('2009', 1, 'Chairman ', 'Mr. Adekoya Kehinde');
        $push('2009', 2, 'Vice Chairman Nigeria', 'Ms. Elizabeth Iyang');
        $push('2009', 3, 'Secretary', 'Mr. Bello Fatiu');
        $push('2009', 4, 'Financial Secretary', 'EnweruzoEmmanuel');
        $push('2009', 5, 'Social Secretary', 'Mr. Adebiyi Sulaiman');
        $push('2009', 6, 'Treasurer', 'Mrs. AJeniya Zainab');
        $push('2009', 7, 'Publicity Secretary 1 ', 'Mrs. Bello Modina');
        $push('2009', 8, 'Publicity Secretary 2 ', 'Bailey Michael');
        $push('2009', 9, 'Publicity Secretary 3', 'Ms. Salako Lolade');

        DB::table('set_representatives')->insert($seed);
    }
}



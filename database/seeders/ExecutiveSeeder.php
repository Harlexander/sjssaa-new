<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExecutiveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $executives = [
            [
                'name' => 'Kolawole Banire',
                'position' => 'President',
                'email' => 'kolawole.banire@sjssaa.com',
                'bio' => 'I am interested in rendering service for our great school first or with the first; I believe my experience coupled with my interpersonal abilities would make me a strong fit for this position.',
                'image' => '/president.jpg',
                'order' => 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Israel Olusegun Alika',
                'position' => 'Vice President Nigeria',
                'email' => 'lanreare@sjssaa.com',
                'bio' => 'A team work aim to design, build and develop the association for the progress, fairness, justice and benefits of all SJSSA members.',
                'image' => '../general secretary.png',
                'order' => 2,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jacob Babatunde Ajayi',
                'position' => 'Vice President Europe and Asia',
                'email' => 'jb.ajayi@sjssaa.com',
                'bio' => 'I am an outstanding team player and possess good communication skills. I am hardworking, very well organized, and self-confident.',
                'image' => '../vp.png',
                'order' => 3,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Solomon Oyedeji',
                'position' => 'Vice President America',
                'email' => 'oorekoya@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '/vp-america.jpg',
                'order' => 4,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Monday Udo',
                'position' => 'General Secretary',
                'email' => 'israelolusegun.alika@sjssaa.com',
                'bio' => '',
                'image' => '/general.sec.jpg',
                'order' => 5,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Dr. Emmanuel Ehiwe',
                'position' => 'Asst. Sect Europe and Asia',
                'email' => 'eehiwe@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '../asst.sec.europe & asia.png',
                'order' => 6,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Anthony Ebhojaye',
                'position' => 'Asst. Sect North and South America',
                'email' => 'anthony.ebhojaye@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '/asst.sec.north.jpg',
                'order' => 7,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Akeem Ajayi',
                'position' => 'Financial Secretary',
                'email' => 'akeem.ajayi@sjssaa.com',
                'bio' => 'I am an Accountant by training and I have also worked in the banking sector for 19 years. I am honest, hardworking and trustworthy and can be relied upon to do what is expected of me every-time',
                'image' => '../financial secretary.png',
                'order' => 8,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Edward Dunkwu',
                'position' => 'Treasurer',
                'email' => 'edunkwu@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '../treasurer.png',
                'order' => 9,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Olanrewaju Dossouyovo',
                'position' => 'Social Secretary',
                'email' => 'ola.dossouyovo@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '/social.sect.jpg',
                'order' => 10,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Fatiu Bello Olaitan',
                'position' => 'Public Relations Officer',
                'email' => 'fatiu.bello@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '../assistant pro.png',
                'order' => 11,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jolaosho Adewale',
                'position' => 'Asst. Fin. Secretary',
                'email' => 'jolaoshoadewale@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '/asst.fin.jpg',
                'order' => 12,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Samuel Afekhade',
                'position' => 'Asst. Social Secretary',
                'email' => 'samuel.afe@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '/asst.social.jpg',
                'order' => 13,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Aboyewa Okonedo',
                'position' => 'Asst. General Secretary',
                'email' => 'aboyewa.okonedo@sjssaa.com',
                'bio' => 'Passion to serve SJSSAA',
                'image' => '',
                'order' => 14,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('executives')->insert($executives);
    }
}

import React from 'react'
import IndexNavbar from '@/Components/Navbar/Navbar'
import PageHeader from '@/Components/Header/PageHeader'
import ExecutiveContainer from '@/Components/Excos/ExecutiveContainer';
import { Head } from '@inertiajs/react';

export const executiveData = [];


const Index = ({ executives = [] }) => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <Head title="National Executives" />
        <IndexNavbar/>
        <PageHeader
          title={"National Executives"}/>
         
         
         <div className='w-full md:px-32 px-5 space-y-12 py-20'>
           {
              executives.map((executive, index) => (
                <>
                   <ExecutiveContainer
                      name={executive.name}
                      img={executive.image ? executive.image : "/user.webp"}
                      bio={executive.bio}
                      mail={executive.email}
                      position={executive.position}/>
                      
                      <div className='h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20'/>
                </>
              ))
           }
        </div>

    </div>
  )
}

export default Index
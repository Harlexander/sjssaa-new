import React from 'react'
import { Head } from '@inertiajs/react'
import IndexNavbar from '@/Components/Navbar/Navbar'
import PageHeader from '@/Components/Header/PageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Index = ({ set, reps = [] }) => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <Head title={`${set} Set Representative`} />
        <IndexNavbar/>
        <PageHeader
          title={`${set} Set Representative`}/>
        
        <div className='md:py-20 md:px-28 px-5 py-8'>
            <div className='md:grid grid-cols-4 space-y-4 md:space-y-0 gap-3'>
                {
                  reps.map(({ position, name, image }, index) => (
                        <div key={index} className="col-1 rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src={image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt=""/>
                            </a>
                            <div className="p-6">
                            <h5 className="font-primary text-xl mb-2">{name}</h5>
                            <p className="text-gray-700 capitalize font-nunito text-base mb-4"><FontAwesomeIcon icon={faUser} className="text-sm"/> {position}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Index

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Head } from '@inertiajs/react'
import IndexNavbar from '@/Components/Navbar/Navbar'
import PageHeader from '@/Components/Header/PageHeader'

const Index = ({ trustees = [] }) => {
  return (
    <div className='bg-yellow-200 min-h-screen'>
        <Head title="Board Of Trustees" />
        <IndexNavbar/>
        <PageHeader
          title={"Board Of Trustees"}/>
         

         <div className='w-full md:px-32 py-20'>
          <div className='md:flex space-y-5 md:space-y-0 flex-wrap md:gap-10 justify-between'>
            {
              trustees.map(({email, position, name, image}, index) => (
                <TrusteeContainer
                key={index}
                  img={image}
                  mail={email}
                  name={name}
                  position={position}/>
              ))
            }
          </div>
         </div>
    </div>
  )
}

export default Index


const TrusteeContainer = ({mail, img, name, position}) => {
  return(
    <div className=''>
      <img src={img} className='border-4 border-yellow-300 mx-auto h-64 w-56' style={{objectFit : "cover"}}/>
      <div className='text-center py-5'>
        <p className='capitalize font-montserrat text-2xl'>{name}</p>
        <p className='font-primary capitalize text-xl'>{position}</p>
      {mail &&         <a href={`mailto:${mail}`} className='underline justify-center font-nunito flex gap-2 items-center'><FontAwesomeIcon icon={faEnvelope} className="text-sm text-yellow-500" />{mail}</a>}
      </div>
    </div>
  )
}
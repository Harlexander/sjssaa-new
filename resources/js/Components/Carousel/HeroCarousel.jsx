import { Link } from '@inertiajs/react'; import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { SolidButton } from '../Button/Button'

const HeroCarousel = ({ data }) => {
    console.log({data});
  return (
    <div className="h-[40em] md:h-[50vh] relative">
    <img src={data.home_image} alt="" className='w-full h-full object-cover absolute top-0 left-0 opacity-50' />
    <div 
        className="flex flex-col h-full space-y-10 px-5 md:text-left text-center justify-center md:px-24 bg-black/80 dark:text-white absolute top-0 left-0 w-full h-full">
        <Fade>
        <p className='font-primary md:text-6xl text-3xl text-pry'>{ data.title }</p>
            <p className='md:text-2xl font-nunito text-white lg:w-3/5'>
            {data.subtext}
            </p>
        </Fade>

            <Fade>
            <div className='flex flex-col md:flex-row gap-5 z-20s'>
                <SolidButton
                    href='/register'
                    title={"New Member Registration"}
                    additionalClass="bg-pry md:py-3 md:text-lg font-nunito py-3 mx-5 md:mx-0"/>             
            </div> 
            </Fade>
        </div>
     </div>
  )
}

export default HeroCarousel;

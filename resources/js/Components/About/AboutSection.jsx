import React from 'react'
import { SolidButton } from '../Button/Button'
import { Slide } from 'react-awesome-reveal'

const AboutSection = ({ data }) => {
  return (
    <div className="space-y-9 md:px-60 pt-20 px-5 pb-24 bg-yellow-100">
      <Slide bottom>
        <p className="text-4xl text-center font-primary">About  Us</p>

        <p className='text-center whitespace-pre-line'>{data.about_us}</p>
        <div className='flex justify-center gap-1 md:gap-5'>
        <a href="/constitution.pdf">         
          <button className={`bg-[#800000]  px-8 py-1 text-white`}>
            Constitution
          </button>
        </a>         
        <a href="/strategic-plan.pdf">         
          <button className={`bg-[#800000]  px-8 py-1 text-white`}>
            Strategic Plan
          </button>
        </a>         
        </div>        
      </Slide>

    </div>
  )
}

export default AboutSection

import React from 'react'
import Executive from './Executive'
import SetRepsSection from './SetRepsSection'
import Trustees from './Trustees'

const ExcosSections = ({ data : { executives, trustees } }) => {
  return (
    <div>
        <Executive executives={executives}/>
        <Trustees trustees={trustees}/>
        <SetRepsSection/>
    </div>
  )
}

export default ExcosSections

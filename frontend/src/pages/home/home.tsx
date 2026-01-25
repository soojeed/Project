import React from 'react'
import navbar from '../../components/Home/navbar'
import section from '../../components/Home/section'

const Home = () => {
  return (
    <div className='bg-[#0C2C55] h-screen rounded-b-2xl mb-20 shadow-neutral-950  '>
        {navbar()}

        <div>
        {section()}
        </div>
        
    </div>

        
  )
}

export default Home
import React from 'react'
import navbar from '../../components/Home/navbar'
import section from '../../components/Home/section'

const Home = () => {
  return (
    <div className='bg-repeat bg-cover min-h-screen' style={{backgroundImage: "url('https://cdn.dribbble.com/userupload/6508147/file/original-11794da09cf2fda821918b0be52877cf.jpg?format=webp&resize=400x300&vertical=center')"}}>
        {navbar()}

        <div>
        {section()}
        </div>
        
    </div>

        
  )
}

export default Home
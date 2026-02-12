import React from 'react'
import navbar from '../../components/Home/navbar'
import section from '../../components/Home/section'
import Navbar from '../../components/Home/navbar'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className=' h-screen rounded-b-2xl mb-20 shadow-neutral-950  '>
        
    <   Navbar />
      <Outlet />
        
        
    </div>

        
  )
}

export default HomePage
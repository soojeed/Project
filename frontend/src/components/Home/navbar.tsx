import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-between p-4 shadow-md bg-[#f0f0f0] ' > 
     <div className='flex justify-between w-full mx-5 '>
       <h1 className='text-blue-900 font-bold'>LOGO</h1>
      <nav>
        <ul className='flex gap-4 font-bold text-lg  cursor-pointer'>
           <a href="/" className='hover:text-blue-700'><li>Home</li></a>
          <a href="/about" className='hover:text-blue-700'><li>About</li></a>
          <a href="/contact" className='hover:text-blue-700'><li>Contact</li></a>
        </ul>
      </nav>
      </div>
      
    </div>
  )
}

export default navbar
import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets"

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false)

useEffect(()=>{
   if(showMobileMenu){
      document.body.style.overflow = 'hidden'
   }else{
      document.body.style.overflow = 'auto'
   }
   return ()=>{
       document.body.style.overflow = 'auto' 
   };
},[showMobileMenu])


  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white'>
           <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
          <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li> 
          <li><a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li> 
         <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
        <img onClick={()=> setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/* -------- mobile-menu --------- */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 bg-white ${showMobileMenu ? 'w-full' : 'hidden'}`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setshowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <li><a onClick={()=> setshowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a></li>
       <li><a onClick={()=> setshowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a></li> 
       <li><a onClick={()=> setshowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a></li>
        <li><a onClick={()=> setshowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a></li> 
        </ul>
      </div>
    </div>
  )
}

export default Navbar
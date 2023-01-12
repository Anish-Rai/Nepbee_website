import React, { useState } from 'react'
import Link from 'next/link'
import Style from '../styles/Navbar.module.css'
const Navbar = () => {
  const [state, setState] = useState(true)
  const navItems = [
    {href:'/', name:'Home'},
    {href:'../#about', name:'About'},
    {href:'../#services', name:'Services'},
    {href:'../#portfolio', name:'Portfolio'},
    {href:'/#Contact', name:'Contact'},
]
  return (
    <div className='flex justify-between items-center px-4 lg:px-44 py-3 overflow-hidden lg:pt-9'>
      <div>
        <Link href='/' passHref >  
          <img src='/logo.png' className='lg:ml-2 w-[50px] md:w-[40px] lg:w-[60px]' /> 
          <span className='lg:text-xl lg:font-semibold hidden lg:block'>NepBee </span>
        </Link>
      </div>

      <div className='flex'>
        <ul className={`lg:flex absolute lg:opacity-100 lg:static lg:w-auto lg:bg-transparent top-[3.5rem] bg-slate-300 w-screen transition-all ease-out duration-500 ${state? '-left-[100%] opacity-10':'left-0 opacity-100'} lg:pr-3`}>
        {
          navItems.map(({href,name})=>{
            return (
              <li key={name} className="text-center py-8 lg:py-[0.6rem] lg:px-5 hover:text-darkblue">
                <Link href={href} passHref> {name} </Link>
              </li>
            )
          })
        }
        </ul>
        <button className='invisible lg:visible transition-all duration-300 hover:text-white bg-enquiry hover:bg-darkblue px-3 rounded-full font-semibold' > Enquire Now </button>
        <div onClick={()=>setState(!state)} className="lg:hidden block">
          <span className={` ${Style.menu}`}></span>
          <span className={`my-1 ${Style.menu}`}></span>
          <span className={` ${Style.menu}`}></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
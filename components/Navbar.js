import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import Style from '../styles/Navbar.module.css'
import Image from 'next/image'
const Navbar = () => {
  const [state, setState] = useState(true)
  const navItems = [
    {href:'/', name:'Home'},
    {href:'/#about', name:'About'},
    {href:'/#services', name:'Services'},
    {href:'/#portfolio', name:'Portfolio'},
    {href:'/#Contact', name:'Contact'},
]

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  const handleScroll = () => {
      const currentScrollPos = window.scrollY
      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className={`flex justify-between items-center px-4 lg:px-44 py-3  lg:pt-9 sticky z-50 bg-white  ${visible ? 'lg:-top-5 top-0' : ''}`}>
      <div>
        <Link href='/' passHref >  
          <Image src='/logo.png' alt='' width={400} height={400} className='lg:ml-2 w-[50px] md:w-[40px] lg:w-[60px]' /> 
          <span className='lg:text-xl lg:font-semibold hidden lg:block'>NepBee </span>
        </Link>
      </div>

      <div className='flex'>
        <ul className={`lg:flex absolute lg:opacity-100 lg:static lg:w-auto lg:bg-transparent top-[3.5rem] bg-white w-screen transition-all ease-out duration-500 ${state? '-left-[100%] opacity-10':'left-0 opacity-100'} lg:pr-3`}>
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
        <div onClick={()=>setState(!state)} className="lg:hidden block ">
          <span className={`transition-all ease-out duration-500 ${Style.menu} ${state?'absolute right-4 mt-4':' rotate-45 mt-2 postion absolute'}`}></span>
          <span className={`transition-all ease-out duration-500 my-1 ${Style.menu} ${state?'absolute mt-2 right-4 opacity-100':' absolute mt-2 right-[20%] opacity-0'}`}></span>
          <span className={`transition-all ease-out duration-500 ${Style.menu} ${state?'absolute right-4':' -rotate-45 mt-2'}`}></span>

          
        </div>
      </div>
    </div>
  )
}

export default Navbar
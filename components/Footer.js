import React from 'react'
import Link from 'next/link'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import {FaRegCopyright} from 'react-icons/fa'
const Footer = () => {
  const navItems = [
    {href:'/', name:'Home'},
    {href:'../#about', name:'About'},
    {href:'../#services', name:'Services'},
    {href:'../#portfolio', name:'Portfolio'},
    {href:'/#Contact', name:'Contact'},
  ]

  const serviceList = [
    {serviceName:'Simple/Static Website'},
    {serviceName:'E-commerce website'},
    {serviceName:'Simple/Static Website'},
    {serviceName:'SEO Optimization'},
    {serviceName:'Web Hosting'},
    {serviceName:'Digital Marketing'},
    {serviceName:'Simple/Static Website'},
  ]
  return (
    <div id='footer' className='lg:pt-20   bg-[#26254F] text-white pt-10 '>
      <div className='grid gap-y-4 lg:grid-cols-3 pb-10 lg:px-44 px-4'>
        <ul>
          <h3 className='text-3xl font-semibold pb-3'>Our Services</h3>
          {
            serviceList.map(({serviceName},key)=>{
              return (
                <li className='leading-[1.9rem]' key={key}> {serviceName} </li>
              )
            })
          }
        </ul>

        <ul>
          <h3 className='text-3xl font-semibold pb-3'>Company</h3>
            {
              navItems.map(({href,name},key)=>{
                return (
                  <li className='leading-[1.9rem]' key={key}>
                    <Link href={href}> {name} </Link>
                  </li>
                )
              })
            }
        </ul>

        <div>
          <h3 className='text-3xl font-semibold pb-3'>Social Media Links</h3>
          <ul className='flex text-4xl'>
            <li className='hover:text-orange-500'> 
              <Link href="#">  <BsFacebook />  </Link> 
            </li>
            <li className='px-10 hover:text-orange-500'> 
              <Link href="#"> <BsInstagram /> </Link>
            </li>
            <li className='hover:text-orange-500'> 
              <Link href="/"> <BsTwitter /> </Link> 
            </li>
          </ul>
          <ul className='pt-10'>
            <h3 className='text-2xl  pb-3'>Subscribe for Newsletter</h3>
            <li> 
              <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 pr-7 text-black' /> 
              <button type="submit" className='bg-orange-500 p-2 text-white hover:bg-orange-600'>Submit</button>
            </li>
        </ul>
        </div>
        
      </div>
      <div className=' py-3 bg-black lg:px-44 px-4'>
        <h4 className='flex items-center text-sm lg:text-base'>Copyright 2023 <FaRegCopyright className='mx-2'/> Nepbee Technology Pvt Ltd. </h4>
      </div>
    </div>
  )
}

export default Footer
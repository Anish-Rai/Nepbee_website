import React from 'react'
import Link from 'next/link'
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'
import {FaRegCopyright,FaMobileAlt} from 'react-icons/fa'
import {MdOutlineLocationOn} from 'react-icons/md'
const Footer = () => {
  const navItems = [
    {href:'/', name:'Home'},
    {href:'../#about', name:'About'},
    {href:'../#services', name:'Services'},
    {href:'../#portfolio', name:'Portfolio'},
    {href:'/services', name:'services'},
    {href:'/#Contact', name:'Contact'},

  ]

  const serviceList = [
    {
      serviceName:'Web Design & Development',
      href:'/services/Web_Design_And_Development'
    },
    {
      serviceName:'Mobile App Development',
      href:'/services/Mobile_App_Development'
    },
    {
      serviceName:'Digital Marketing & SEO',
      href:'/services/Digital_Marketing_And_SEO'
    },
    {
      serviceName:'Graphics & Logo Design',
      href:'/services/Graphics_And_Logo_Design'
    },
    {
      serviceName:'Domain & Hosting',
      href:'/services/Domain_And_Hosting_Service'
    },
    {
      serviceName:'Content Writing',
      href:'/services/Content_Writing'
    },
    {
      serviceName:'Desktop App Development',
      href:'/services/Desktop_App_Development'
    },
    {
      serviceName:'Data Analytics',
      href:'/services/Data_Analytics'
    },
  ]
  return (
    <div id='footer' className='lg:pt-20   bg-[#26254F] text-white pt-10 '>
      <div className='grid gap-y-4 lg:grid-cols-4 pb-10 lg:px-44 px-4'>
        <ul>
          <h3 className='text-3xl font-semibold pb-3'>Our Services</h3>
          {
            serviceList.map(({serviceName,href},key)=>{
              return (
                <li className='leading-[1.9rem] hover:text-orange-500' key={key}> 
                  <Link href={href}> {serviceName} </Link>
                 </li>
              )
            })
          }
        </ul>

        <ul>
          <h3 className='text-3xl font-semibold pb-3'>Company</h3>
            {
              navItems.map(({href,name},key)=>{
                return (
                  <li className='leading-[1.9rem] hover:text-orange-500' key={key}>
                    <Link href={href}> {name} </Link>
                  </li>
                )
              })
            }
        </ul>
        <ul>
          <h3 className='text-3xl font-semibold pb-3'>Contact Info</h3>
          <li className='flex items-center hover:text-orange-500 leading-[1.9rem]'>
            <FaMobileAlt /> <a href="tel:+977-9840022255" className='pl-1'>+977-9840022255</a>
          </li>
          <li className='flex items-center hover:text-orange-500'>
            <MdOutlineLocationOn className='text-lg' /> <p className='pl-1'> <a href="https://goo.gl/maps/KNqBu2dNHVc1Yj1eA"> Kupondole, kandevta </a> </p>
          </li>
        </ul>
        <div>
          <h3 className='text-3xl font-semibold pb-3'>Social Media Links</h3>
          <ul className='flex text-2xl'>
            <li className='hover:text-orange-500'> 
              <Link href="https://www.facebook.com/nepbeetech">  <BsFacebook />  </Link> 
            </li>
            <li className='px-10 hover:text-orange-500'> 
              <Link href="https://www.instagram.com/nepbeetechnology"> <BsInstagram /> </Link>
            </li>
            <li className='hover:text-orange-500'> 
              <Link href="https://twitter.com/NepbeeTecnoloyy"> <BsTwitter /> </Link> 
            </li>
            <li className='px-10 hover:text-orange-500'> 
              <Link href="https://twitter.com/NepbeeTecnoloyy"> <BsLinkedin /> </Link> 
            </li>
          </ul>
          <ul className='pt-10'>
            <h3 className='text-2xl  pb-3'>Subscribe for Newsletter</h3>
            <li> 
              <input type="email" name="email" id="email" placeholder='Enter your email' disabled className='p-2 pr-7 text-black' /> 
              <button type="submit" disabled className='bg-orange-500 p-2 text-white hover:bg-orange-600'>Submit</button>
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
import React from 'react'
import {FaMobileAlt} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {MdOutlineLocationOn} from 'react-icons/md'
const ContactUs = () => {
  return (
    <div id='contactus' className='lg:px-44 bg-black text-white lg:py-20 py-7 px-4 md:text-center'>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold pt-4 lg:pt-0 pb-10'>CONTACT INFO</h1>
        <div className='md:pt-10 md:grid md:grid-cols-2'>
            <div className='pb-8 md:pb-20'>
            <a href="mailto:info@nepbee.com" >
                <h1 className='md:flex md:justify-center'>
                    <AiOutlineMail className='text-5xl '/>
                </h1>
                info@nepbee.com 
            </a>
            </div>
            <div className='pb-8 md:pb-20'>
            <a href="https://goo.gl/maps/MybCjkUCCuKfeh3X9">
                <h1 className=' md:flex md:justify-center'>
                    <MdOutlineLocationOn className='text-5xl' />
                </h1>
                 Kathmanduq , Kupondole-Kandevta 
            </a>
            </div>
        </div>
        <hr className='hidden lg:block'/>
        <h2 className=' pb-4 md:pt-20'>
            <a href="tel:+977-9840022255">
                <h1 className='md:flex md:justify-center'>
                    <FaMobileAlt className='text-5xl '/> 
                </h1>
               <span className='md:text-4xl'>
               +977-9840022255
                </span>
            </a>
        </h2>
    </div>
  )
}

export default ContactUs
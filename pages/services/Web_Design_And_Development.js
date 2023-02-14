import React from 'react'
import Image from 'next/image'
import WebDesignAndDevelopmentFaq from '../faq/WebDesignAndDevelopmentFaq'
const WebDevelopment = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-[#756bd3] lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Build Your Responsive Website With Us.</h1>  
            <div className='flex justify-end' > <Image src={'/services/webdesign.png'} alt="" priority width={550} height={300} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>Nepbee Technology is a leading provider of website development services, offering custom solutions to businesses of all sizes. Our team of experienced developers uses the latest technologies and tools to create innovative, user-friendly websites that meet the unique needs of each client.
            Our website development services include:
          </p>
          <ul className='list-disc pl-4'>
            <li>
              <span className='font-semibold'>Website Design:</span> We create visually appealing and user-friendly website designs that accurately reflect your brand. Our designers work closely with you to ensure your website meets your specific requirements.
            </li>
            <li>
              <span className='font-semibold'>Custom Development:</span> We build custom websites from scratch, tailored to meet the specific needs of your business. Our developers use the latest technologies to create a website that is fast, secure, and easy to use.

            </li>
            <li>
              <span className='font-semibold'>E-commerce Development:</span> Our e-commerce website development services help businesses sell their products and services online. We build secure, user-friendly e-commerce websites that are optimized for online sales.

            </li>
            <li>
              <span className='font-semibold'>Content Management Systems (CMS):</span> We develop CMS-powered websites that allow you to manage your content with ease. Our CMS websites are customizable and user-friendly, making it easy for you to update your website as your business evolves.

            </li>
            <li>
              <span className='font-semibold'>Responsive Design:</span> We build websites that are optimized for viewing on any device, including desktop computers, laptops, tablets, and smartphones. Our responsive design ensures that your website is accessible to all users, regardless of the device they are using.
            </li>            
          </ul>
          <p className='lg:pt-6 pt-4'>
            At Nepbee Technology, we are committed to delivering high-quality website development services at an affordable price. Our team works closely with clients to understand their business goals and create a website that will help them achieve those goals.If you&apos;re looking for a reliable and professional website development company, look no further than Nepbee Technology. Contact us today to learn more about our services and how we can help your business succeed online.
          </p>
        
        </div>
        
        {/* accordion FAQ section */}
        <WebDesignAndDevelopmentFaq />

      </div>
  )
}

export default WebDevelopment
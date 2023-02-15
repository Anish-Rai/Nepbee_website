import React from 'react'
import Image from 'next/image'
import DesktopAppFaq from '../faq/DesktopAppFaq'
import DesktopAppPricing from '../pricing/Desktop_App_Development_Pricing'
const Desktop_App_Development = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-[#A89038] lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Create Fully Responsive Desktop Application With Us</h1>  
            <div className='flex justify-end' > <Image src={'/services/desktop.png'} priority alt="" width={550} height={200} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>Nepbee Technology is a leading provider of custom desktop application development solutions. Our team of experienced developers leverages the latest technologies and tools to build robust, reliable, and scalable desktop applications that meet the unique needs of your business.
            Whether you need a desktop application for Windows or macOS, Nepbee Technology has the expertise to bring your vision to life. Our development process is designed to be fast, efficient, and cost-effective, so you can get your application to market quickly.
            Our desktop application development services include:
          </p>
          <ul className='font-semibold list-disc pl-4'>
            <li>
            Conceptualization and design
            </li>
            <li>Desktop application development</li>
            <li>Quality assurance and testing</li>
            <li>Deployment and maintenance</li>
          </ul>            
        <p>
            We work closely with our clients to understand their business needs, identify their target audience, and define the goals and objectives of their desktop application. Our developers then use this information to create a custom application that is both functional and visually appealing.
            We use the latest technologies, including .NET, Java, and C++, to build desktop applications that are fast, reliable, and user-friendly. Our team of experienced testers ensures that the application is free of bugs and performs optimally on all systems.
            At Nepbee Technology, we understand the importance of timely and effective support, so we offer ongoing maintenance and support services to ensure that your application continues to perform at its best.Get in touch with us today to learn more about our desktop application development services and how we can help you achieve your goals
        </p>

        
        </div>
        <DesktopAppPricing />
        {/* accordion FAQ section */}
        <DesktopAppFaq />

      </div>
  )
}

export default Desktop_App_Development
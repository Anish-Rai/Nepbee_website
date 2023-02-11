import React from 'react'
import Image from 'next/image'
const Mobile_App_Development = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-[#023A81] lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Are You Excited For Seamless Mobile Application Experience</h1>  
            <div className='flex justify-end' > <Image src={'/phone.svg'} alt="" width={350} height={300} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>Nepbee Technology is a leading provider of innovative mobile app development solutions. Our team of experienced developers leverages the latest technologies and tools to build custom mobile applications that meet the unique needs of your business.

              Whether you need a mobile app for iOS or Android, Nepbee Technology has the expertise to bring your vision to life. Our development process is designed to be fast, efficient, and cost-effective, so you can get your app to market quickly.

              Our app development services include:
          </p>
          <ul className='list-disc pl-4'>
            <li className='font-semibold'>Conceptualization and design</li>
            <li className='font-semibold'>Mobile app development</li>
            <li className='font-semibold'>Quality assurance and testing</li>
            <li className='font-semibold'>Deployment and maintenance</li>             
          </ul>
          <p className='lg:pt-6 pt-4'>
              We work closely with our clients to understand their business needs, identify their target audience, and define the goals and objectives of their mobile app. Our developers then use this information to create a custom app that is both functional and visually appealing.

              We use the latest tools and technologies, including React Native, Xamarin, and Flutter, to build mobile apps that are fast, reliable, and user-friendly. Our team of experienced testers ensures that the app is free of bugs and performs optimally on all devices.

              At Nepbee Technology, we understand the importance of timely and effective support, so we offer ongoing maintenance and support services to ensure that your app continues to perform at its best.Get in touch with us today to learn more about our mobile app development services and how we can help you achieve your goals.
          </p>

        
        </div>
        
        {/* accordion FAQ section */}
        {/* <FrequentlyAskedQ /> */}

      </div>
  )
}

export default Mobile_App_Development
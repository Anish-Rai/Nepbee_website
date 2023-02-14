import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className='lg:flex lg:justify-center lg:items-center py-10 lg:pt-0  lg:bg-transparent px-4 lg:px-44'>
      <div className='lg:w-[50%] flex justify-center items-center'>
        
        <Image src="/ghan1.jpg" alt="" width={600} height={800} className=" w-[80%]  rounded-full" />
        
      </div>
      <div className='lg:w-[50%] lg:ml-20'>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold pt-4 lg:pt-0'>ABOUT US</h1>
        <p className='mt-4'>NepBee is a start-up IT company that is dedicated to providing top-notch technology solutions to businesses of all sizes. We believe in the power of innovation and strive to stay ahead of the curve when it comes to emerging technologies. Our team of highly skilled and experienced professionals are committed to delivering tailored solutions that meet the unique needs of each and every one of our clients.

        At NepBee, we specialize in a range of IT services including web development, software development, cloud computing, cybersecurity, and more. We have a track record of successfully completing projects on time and within budget, and we pride ourselves on our ability to build long-term relationships with our clients.
        </p>
        <p className='mt-7 hidden lg:block'>
        Our mission is simple: to help our clients leverage technology to drive growth and success. Whether you&apos;re a small business looking to make your mark in the industry or a large corporation seeking to stay competitive, we have the expertise and resources to help you reach your goals.

So if you&apos;re ready to take your business to the next level with the help of a reliable and experienced IT partner, look no further than NepBee. Contact us today to learn more about how we can help you succeed.


        </p>
      </div>
    </div>
  )
}

export default About
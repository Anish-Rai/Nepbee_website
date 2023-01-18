import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className='lg:flex py-10 lg:pt-0  lg:bg-transparent px-4 lg:px-44'>
      <div className='lg:w-[50%]'>
        
        <Image src="/about.webp" alt="" width={600} height={800} className=" w-[70%] hidden lg:block" />
        <Image src="/about1.webp" alt="" width={800} height={800} className="" />
      </div>
      <div className='lg:w-[50%] lg:ml-20'>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold pt-4 lg:pt-0'>ABOUT US</h1>
        <p className='mt-4'>dfssssssssssssssssssssa dsf sa lorasdf sadfsafsdaf ssd 
        </p>
        <p className='mt-7 hidden lg:block'>
            of classical Latin literature from 45 Contrary to popular belief Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45  Contrary to popular beliefp 
            Lorem Ipsum is not simply random text. It has roots in a piece 
            of classical Latin literature from 45 Contrary to popular beliefp Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45  Contrary to popular beliefp 
            Lorem Ipsum is not simply random text. It has roots in a piece 
            of classical Latin literature from 45 
            many web sites still in their infancy. Various versions have evolved over the yearsp sometimes by accidentp sometimes on purpose injected humour and the like.
        </p>
      </div>
    </div>
  )
}

export default About
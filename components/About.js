import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='flex'>
      <div className='w-[50%]'>
        
        <Image src="/about.webp" alt="" width={600} height={800} className=" w-[70%]" />
        <Image src="/about1.webp" alt="" width={800} height={800} className="" />
      </div>
      <div className='w-[50%] ml-20'>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold'>ABOUT US</h1>
        <p className='mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
            more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
            from 45 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45  Contrary to popular belief, 
            Lorem Ipsum is not simply random text. 
        </p>
        <p className='mt-7'>
            of classical Latin literature from 45 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45  Contrary to popular belief, 
            Lorem Ipsum is not simply random text. It has roots in a piece 
            of classical Latin literature from 45 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45  Contrary to popular belief, 
            Lorem Ipsum is not simply random text. It has roots in a piece 
            of classical Latin literature from 45 
            many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  )
}

export default About
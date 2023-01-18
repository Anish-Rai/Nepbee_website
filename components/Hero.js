import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='lg:flex pt-4 items-center justify-center px-4 lg:px-44'>
      <div className='lg:w-[45%] lg:h-screen lg:translate-y-[20%] '>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold text-darkblue'>WE ARE NEPAL BASED IT COMPANY</h1>
        <p className='lg:pt-5'>We believe in the power of innovation and strive to stay ahead of the curve when it comes to emerging technologies. Our team of highly skilled and experienced professionals are committed to delivering tailored solutions that meet the unique needs of each and every one of our clients.</p>
        <button className='bg-pinkish lg:mt-7 mt-2 text-sm lg:text-base text-white px-3 py-2 rounded-full hover:bg-pink-600'>LEARN MORE</button>
      </div>

      <div className='lg:w-[55%]'>
        <Image src="/Rectangle2.svg" alt="backgroud" width={600} height={600} className="h-[100%] w-[100%] lg:absolute left-0 top-0 -z-30 hidden lg:block" />
        <Image src="/Rectangle1.svg" alt="background" width={500} height={500} className="h-[100%] w-[100%] lg:absolute -left-5 top-0 -z-30 hidden lg:block" />
        <Image src="/hero_img.svg" alt="background" width={800} height={800} className=" lg:absolute left-[40%] top-[10%] z-10" />
      </div>
    </div>
  )
}

export default Hero
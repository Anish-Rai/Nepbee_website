import React from 'react'
import Image from 'next/image'
const Index = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
        <Image src="/moon.svg" height={60} width={60} alt="404.svg image" className='absolute translate-x-[60%]  -translate-y-48 w-[20%] h-[20%] md:w-auto md:h-16 md:translate-x-[360%]'/>
        <Image src="/small_planet.svg" height={50} width={50} alt="404.svg image" className='absolute md:-translate-x-[360%] md:w-auto md:h-auto -translate-y-48 w-[20%] h-[20%]' />
       <Image src="/404.svg" height={500} width={500} alt="404.svg image" className='w-[100%] md:w-auto'/> 
       <h1 className='text-4xl font-semibold'>
            Page Not Found
        </h1>
    </div>
  )
}

export default Index
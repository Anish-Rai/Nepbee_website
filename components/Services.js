import React from 'react'
import Image from 'next/image'
import {FaLaptopCode} from 'react-icons/fa'

const Services = () => {
    const serviceList = [
        {logo:FaLaptopCode,title:'Web Design & Development',description:'Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the '},
        {logo:FaLaptopCode,title:'Web Design & Development',description:'Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the '},
        {logo:FaLaptopCode,title:'Web Design & Development',description:'Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the '},
        {logo:FaLaptopCode,title:'Web Design & Development',description:'Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the '},
        {logo:FaLaptopCode,title:'Web Design & Development',description:'Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the '},
        {logo:FaLaptopCode,title:'Web Design & Development',description:'Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the '},
    ]
  return (
    <div id='services' className='lg:pt-20 lg:pb-24  py-10 px-4 bg-lightestblue lg:px-44 relative '>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold pt-4 lg:pt-0 lg:pb-7 pb-3 relative z-20'> OUR SERVICES </h1>
        <span className='block w-[100%] h-[0.1rem] bg-slate-300 lg:mb-5'></span>
        <div className='flex '>
            <div className='lg:w-[80%] text-center lg:flex flex-wrap'>
                {serviceList.map(({logo,title,description},key)=>{
                    const Icon = logo;
                    return (
                    <div className='mx-5 shadow-full-shadow hover:shadow-lightblue  rounded-3xl my-4 p-3 lg:w-[27%]' key={key}>
                        <h2 className='flex justify-center text-6xl pt-3'> < Icon /> </h2>
                        <h2 className='text-xl font-semibold'>{title}</h2>
                        <p className='px-2'>{description}</p>
                    </div>
                    )
                })}
                
            </div>

            <div className='lg:w-[20%]  hidden lg:block '>
                <Image src="/person.svg" alt="" width={200} height={200} />
            </div>
            
        </div>
            <Image src="/ellipse_1.svg" alt="" width={200} height={200} className="absolute top-0 left-0 z-10 hidden lg:block" />
            <Image src="/ellipse_2.svg" alt="" width={200} height={200} className="absolute top-1/3 right-0 z-10 hidden lg:block" />
    </div>
  )
}

export default Services
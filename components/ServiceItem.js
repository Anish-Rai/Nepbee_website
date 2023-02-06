import React from 'react'
import Link from 'next/link'
const ServicePost = (props) => {
  const {serviceList} = props
  return (
    <div className='lg:w-[80%] text-center lg:flex flex-wrap'>
                {serviceList.map(({logo,service,title,description},key)=>{
                    const Icon = logo;
                    return (
                      <div className='mx-5 shadow-full-shadow hover:shadow-lightblue  rounded-3xl my-4 p-3 lg:w-[27%]' key={key}>
                      <Link href={`/services/${encodeURIComponent(service)}`} key={key}>
                      <h2 className='flex justify-center text-6xl pt-3'> <Icon /> </h2>
                      <h2 className='text-xl font-semibold'>{title}</h2>
                      <p className='px-2'>{description}</p>
                      </Link>
                  </div>
                    )
                })}
                
            </div>
    
  )
}

export default ServicePost
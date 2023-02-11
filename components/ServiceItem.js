import React from 'react'
import Link from 'next/link'
const ServiceItem = (props) => {
  const {serviceList} = props
  return (
    <div className='lg:w-[80%] text- lg:flex flex-wrap lg:text-center'>
                {serviceList.map(({logo,slug,title,description},key)=>{
                    const Icon = logo;
                    return (
                      <div className='lg:mx-5 shadow-full-shadow bg-white hover:shadow-lightblue  rounded-xl my-4 p-3 lg:w-[27%]' key={key}>
                      <Link href={`/services/${encodeURIComponent(slug)}`} passHref key={key}>
                      <h2 className='text-6xl pt-3 px-2 lg:flex lg:justify-center'> <Icon /> </h2>
                      <h2 className='text-xl px-2 font-semibold'>{title}</h2>
                      <p className='px-2'>{description}</p>
                      </Link>
                  </div>
                    )
                })}
                
            </div>
    
  )
}

export default ServiceItem
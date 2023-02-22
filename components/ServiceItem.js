import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Style from '../styles/ServiceItem.module.css'
const ServiceItem = (props) => {
  const {serviceList} = props
  const [color,setColor] = useState('hover:shadow-none')
  const [lineColor,setLineColor] = useState('')
  const colorPicker = (x) =>{
    switch(x){
      case 1:
        setColor('hover:shadow-[#756BD3]');
        setLineColor('before:bg-[#756BD3]')
        break;
      case 2:
        setColor('hover:shadow-[#023A81]');
        setLineColor('before:bg-[#023A81]')
        break;

      case 3:
        setColor('hover:shadow-[#528DDB]');
        setLineColor('before:bg-[#528DDB]')
        break;
      case 4:
        setColor('hover:shadow-[#168086]');
        setLineColor('before:bg-[#168086]')
        break;
      case 5:
        setColor('hover:shadow-[#22C55E]');
        setLineColor('before:bg-[#22C55E]')
        break;
      case 6:
        setColor('hover:shadow-[#A89038]');
        setLineColor('before:bg-[#A89038]')
        break;
      case 7:
        setColor('hover:shadow-[#3B82F6]');
        setLineColor('before:bg-[#3B82F6]')
        break;
      case 8:
        setColor('hover:shadow-[#FDE047]');
        setLineColor('before:bg-[#FDE047]')
        break;
    }
    
  }
  return (
    <div className='lg:w-[80%] text- lg:flex flex-wrap '>
                {serviceList.map(({logo,slug,title,description},key)=>{
                    const Icon = logo;
                    return (
                      <div className={`lg:mx-5 shadow-md bg-white ${color} ${lineColor}  before:h-2 before:absolute before:w-0 before:transition-all before:delay-300 before:ease-in hover:before:w-[calc(16.6%)] before:rounded-t-full  rounded-xl my-4  lg:w-[27%]`} key={key} onMouseEnter={()=>colorPicker(key+1)}>
                      <div className='lg:text-center p-3'>
                        <Link href={`/services/${encodeURIComponent(slug)}`} passHref key={key}>
                        <h2 className='text-6xl pt-3 px-2 lg:flex lg:justify-center lg:hover:animate-spin'> <Icon /> </h2>
                        <h2 className='text-xl px-2 font-semibold'>{title}</h2>
                        <p className='px-2'>{description}</p>
                        </Link>
                      </div>
                  </div>
                    )
                })}
                
            </div>
    
  )
}

export default ServiceItem
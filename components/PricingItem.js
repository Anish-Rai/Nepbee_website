import React from 'react'
import { useState } from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import Image from 'next/image'
const PricingItem = ({originaldata,filter}) => {
  const data = originaldata.find(ele =>ele.slug==filter)
  const [value,setValue] = useState(false)
    const [mouseEnter,setMouseEnter] = useState(0)
    const [shadowColor,setShadowColor] = useState('')
    const [buttonColor,setButtonColor] = useState('')

    const colorPicker = (num) =>{
        if (num==1){
            setShadowColor('hover:shadow-yellow-300')
            setButtonColor('hover:bg-yellow-300')
        }
        else if (num==2){
            setShadowColor('hover:shadow-blue-300')
            setButtonColor('hover:bg-blue-300')
        }
        else if (num==3){
            setShadowColor('hover:shadow-red-600')
            setButtonColor('hover:bg-red-400')
        }else{
            setShadowColor('')
        }
    }
  
  return (
    <div>
      
      {
        <div className='grid lg:grid-cols-3 gap-3 items-start' >
        {

            data.data.map(({type,title,price_npr,price_usd,serviceList},key)=>{
                    return (
                        <div key={key}>
                            <div className={`hover:shadow-xl rounded-2xl hover:scale-105 ${value?shadowColor:''} transition-all ease-out duration-500`} onMouseEnter={()=>{setMouseEnter(key+1),colorPicker(key+1)}} onMouseLeave={()=>setMouseEnter(0)}>
                            <div className='relative flex justify-center items-center rounded-2xl pt-10'>
                                <Image src={`/pricing/${type}.svg`}alt='' className={`rounded-2xl absolute z-20  transition-all ease-out duration-300  ${mouseEnter===key+1?'w-[100%] opacity-100':'opacity-0 w-0'} `} width={300} height={300} />
                                <Image src="/pricing/default.svg" alt='' className=' rounded-2xl absolute w-[100%] ' width={300} height={300} />
                                <h2 className={`text-center text-2xl py-2 font-medium pb-2 rounded-t-2xl absolute z-40 ${mouseEnter===key+1?'text-white':'text-black'}`}>{type}</h2>
                            </div>

                            <div className={` p-10 lg:pt-16 pt-14  bg-white  rounded-b-2xl   border `}>
                            {
                               ( type=="Premium") && (<div className='flex justify-center pt-2 pb-7'>
                                <button className='text-center bg-green-200 py-1 px-4 rounded'>Most Popular</button>
                                </div>)
                            } 
                            <p className='text-center text-sm pt-4'>{title}</p>
                            <h1 className={`text-center font-bold text-5xl pt-2  text-orange-500`}>{price_npr}</h1>
                            <h1 className='text-center font-bold text-2xl pt-2 text-green-600 pb-7 capitalize'>{price_usd}</h1>
                <ul >
                    {
                        serviceList.map(({feature},key)=>{
                            return (
                                <li className='flex items-center ' key={key}  >
                                    <BsFillCheckCircleFill className='text-blue-700 flex-shrink-0'/>
                                    <p className='pl-3 leading-9 flex-shrink-0'> {feature} </p> 
                                </li>
                            )
                        })
                    }
                    

                </ul>
                {/* <div className='flex justify-center'>
                    <button className={`transition-colors duration-300 ease-out bg-slate-800 px-6 py-1 ${buttonColor} hover:text-black font-semibold mt-6 rounded-full lg:text-2xl w-[100%] text-white`} onMouseEnter={()=>setValue(true)} onMouseLeave={()=>setValue(false)}>Contact Us</button>
                </div> */}

            </div>
        </div>
    
    </div>
                    )
                })
              }  
        </div>
      }
    </div>
  )
}

export default PricingItem



import React from 'react'
import { useState } from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import Image from 'next/image'
const WebAppPricing = () => {
    
    const basicPack = [
        {feature:'Small Size Website'},
        {feature:'Responsive Design'},
        {feature:'Single PAge SEO'},
        {feature:'free domain hosting'},
        {feature:'24/7 service'},
        {feature:'Content writing'},
        {feature:'graphics design'},
        {feature:'use of php'},
        {feature:'Regular Backup'},
        {feature:'Fast Delivery Additional Cost'},
        
    ]
    const premiumPack = [
        {feature:'Medium size Website'},
        {feature:'Responsive Design'},
        {feature:'Single PAge SEO'},
        {feature:'free domain hosting'},
        {feature:'24/7 service'},
        {feature:'Content writing'},
        {feature:'graphics design'},
        {feature:'Use of javascript/python/php'},
        {feature:'Regular Backup'},
        {feature:'Fast Delivery Additional Cost'},
        {feature:'6 month free maintainance'},
    ]
    const professionalPack = [
        {feature:'Multiple page'},
        {feature:'Responsive Design'},
        {feature:'Single PAge SEO'},
        {feature:'free domain hosting'},
        {feature:'24/7 service'},
        {feature:'Content writing'},
        {feature:'graphics design'},
        {feature:'Use of javascript/python/php'},
        {feature:'Regular Backup'},
        {feature:'Fast Delivery Additional Cost'},
        {feature:'1 year free maintainance'},
    ]
    const [value,setValue] = useState(false)
    const [mouseEnter,setMouseEnter] = useState(0)

  return (
    <div className='relative bg-slate-50'>
         {/* <div className='h-[50%] bg-blue-50 absolute -z-10 top-0 w-[100%] left-0'></div> */}
         
    
    <div id='pricing' className='  g:pt-14 lg:pb-32 py-8 px-4  lg:px-44 text-black'>
        <h1 className=' text-2xl lg:text-5xl lg:font-bold font-semibold  lg:pt-0 lg:pb-4 pb-3 '>Pricings</h1>
        <p className='pb-10 '>Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup</p>
        <div className='grid lg:grid-cols-3 gap-3 lg:px-12 items-center '>
            <div className={`hover:shadow-xl rounded-2xl hover:scale-105 ${value?'hover:shadow-yellow-300':''} transition-all ease-out duration-500`} onMouseEnter={()=>setMouseEnter(1)} onMouseLeave={()=>setMouseEnter(0)}>
                <div className='relative flex justify-center items-center rounded-2xl pt-10'>
                    <Image src="/services/pricingarrowcolor.svg" className={`rounded-2xl absolute z-50  transition-all ease-out duration-300  ${mouseEnter===1?'w-[100%] opacity-100':'opacity-0 w-0'} `} width={300} height={300} />
                    <Image src="/services/pricingarrow.svg" className=' rounded-2xl absolute w-[100%] ' width={300} height={300} />
                    <h2 className={`text-center text-2xl py-2 font-medium pb-2 rounded-t-2xl absolute z-50 ${mouseEnter===1?'text-white':'text-black'}`}>Basic</h2>
                </div>
                
                <div className={` p-10 pt-14  bg-white  rounded-b-2xl   border `}>
                    
                    <p className='text-center text-sm'>Suitable for individual blogers or startup</p>
                    <h1 className='text-center font-bold text-5xl pt-2 pb-7 text-orange-500'>Rs 25,000</h1>
                    <ul>
                        {
                            premiumPack.map(({feature},key)=>{
                                return (
                                    <li className='flex items-center' key={key}>
                                        <BsFillCheckCircleFill className='text-blue-700'/>
                                        <p className='pl-3 leading-9'> {feature} </p> 
                                    </li>
                                )
                            })
                        }
                        

                    </ul>
                    <div className='flex justify-center'>
                        <button className='transition-colors duration-300 ease-out bg-slate-800 px-6 py-1 hover:bg-yellow-300 hover:text-black font-semibold mt-6 rounded-full lg:text-2xl w-[100%] text-white' onMouseEnter={()=>setValue(true)} onMouseLeave={()=>setValue(false)}>Contact Us</button>
                    </div>
                </div>
            </div>
       
            <div className={`hover:shadow-xl rounded-2xl hover:scale-105 ${value?'hover:shadow-blue-300':''} transition-all ease-out duration-500`} onMouseEnter={()=>setMouseEnter(2)} onMouseLeave={()=>setMouseEnter(0)}>
                <div className='relative flex justify-center items-center pt-10'>
                    <Image src="/services/bluearrow.svg" className={`rounded-2xl absolute z-50 transition-all ease-out duration-300  ${mouseEnter===2?'w-[100%] opacity-100':'opacity-0 w-0'} `} width={300} height={300} />
                    <Image src="/services/pricingarrow.svg" className='rounded-2xl absolute w-[100%] ' width={300} height={300} />
                    <h2 className={`text-center text-2xl  py-2 font-medium pb-2 rounded-t-2xl absolute z-50 ${mouseEnter===2?'text-white':'text-black'} `}>Premium</h2>
                </div>
                <div className={` p-10 pt-16 bg-white rounded-b-2xl    border `}>
                   <div className='flex justify-center pt-2 pb-7'>
                   <button className='text-center bg-green-200 py-1 px-4 rounded'>Most Popular</button>
                   </div>    
                    <p className='text-center text-sm'>Suitable for individual blogers or startup</p>
                    <h1 className='text-center font-bold text-5xl pt-2 pb-7 text-blue-800'>Rs 45,000</h1>
                    <ul>
                        {
                            basicPack.map(({feature},key)=>{
                                return (
                                    <li className='flex items-center' key={key}>
                                        <BsFillCheckCircleFill className='text-blue-700'/>
                                        <p className='pl-3 leading-9'> {feature} </p> 
                                    </li>
                                )
                            })
                        }
                        

                    </ul>
                    <div className='flex justify-center'>
                        <button className='transition-colors duration-300 ease-out bg-slate-800 px-6 py-1 hover:bg-blue-300 hover:text-black font-semibold mt-6 rounded-full lg:text-2xl w-[100%] text-white' onMouseEnter={()=>setValue(true)} onMouseLeave={()=>setValue(false)}>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className={`hover:shadow-xl rounded-2xl hover:scale-105 ${value?'hover:shadow-red-600':''} transition-all ease-out duration-500`} onMouseEnter={()=>setMouseEnter(3)} onMouseLeave={()=>setMouseEnter(0)}>
            <div className='relative flex justify-center items-center pt-10'>
                    <Image src="/services/redarrow.svg" className={`rounded-2xl absolute z-50 transition-all ease-out duration-300  ${mouseEnter===3?'w-[100%] opacity-100':'opacity-0 w-0'} `} width={300} height={300} />
                    <Image src="/services/pricingarrow.svg" className='rounded-2xl absolute w-[100%] ' width={300} height={300} />
                    <h2 className={`text-center text-2xl py-2 font-medium pb-2 rounded-t-2xl absolute z-50 ${mouseEnter===3?'text-white':'text-black'}`}>Basic</h2>
                </div>
                <div className={` p-10 pt-16 bg-white  rounded-b-2xl   border `}>
                    
                    <p className='text-center text-sm'>Suitable for individual blogers or startup</p>
                    <h1 className='text-center font-bold text-5xl pt-2 pb-7 text-red-600'>Rs 75,000</h1>
                    <ul>
                        {
                            professionalPack.map(({feature},key)=>{
                                return (
                                    <li className='flex items-center' key={key}>
                                        <BsFillCheckCircleFill className='text-blue-700'/>
                                        <p className='pl-3 leading-9'> {feature} </p> 
                                    </li>
                                )
                            })
                        }
                        

                    </ul>
                    <div className='flex justify-center'>
                        <button className='transition-colors duration-300 ease-out bg-slate-800 px-6 py-1 hover:bg-red-400 hover:text-black font-semibold mt-6 rounded-full lg:text-2xl w-[100%] text-white' onMouseEnter={()=>setValue(true)} onMouseLeave={()=>setValue(false)}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WebAppPricing
import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const DesktopAppPricing = () => {
    const basicPack = [
        {feature:'Responsive Design'},
        {feature:'5 page'},
        {feature:'Graphics Design'},
        {feature:'Content Writing'},
        {feature:'24/7 service'},
        {feature:'1 Year free maintainance'},
        {feature:'Daily Backup'},
        
    ]
    const premiumPack = [
        {feature:'Responsive Design'},
        {feature:'10 page'},
        {feature:'Graphics Design'},
        {feature:'Content Writing'},
        {feature:'24/7 service'},
        {feature:'1 Year free maintainance'},
        {feature:'Daily Backup'},
        {feature:'Cloud Storage'},
    ]
    const professionalPack = [
        {feature:'Responsive Design'},
        {feature:'20 page'},
        {feature:'Graphics Design'},
        {feature:'Content Writing'},
        {feature:'24/7 service'},
        {feature:'1 Year free maintainance'},
        {feature:'Daily Backup'},
        {feature:'Cloud Storage'},
        {feature:'Hybrid App'},
    ]
  return (
    <div id='pricing' className='lg:pt-14 lg:pb-32 py-8 px-4  lg:px-44'>
        <h1 className=' text-2xl lg:text-5xl lg:font-bold font-semibold  lg:pt-0 lg:pb-4 pb-3'>Pricings</h1>
        <p className='pb-10'>Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup</p>
        <div className='grid lg:grid-cols-3 gap-3'>
            <div className='shadow-full-shadow-dark p-10 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl'>
                <h2 className='text-center text-2xl font-medium pb-2'>Basic</h2>
                <p className='text-center text-sm'>Suitable for startup</p>
                <h1 className='text-center font-bold text-5xl pt-2 pb-7'>Rs 25,000</h1>
                
                <ul>
                    {
                        basicPack.map(({feature},key)=>{
                            return (
                                <li className='flex items-center' key={key}>
                                    <BsFillCheckCircleFill />
                                    <p className='pl-3 leading-9'> {feature} </p> 
                                </li>
                            )
                        })
                    }
                    

                </ul>

            </div>

            <div className=' text-white shadow-full-shadow-dark p-10 bg-gradient-to-br from-blue-700 to-purple-500 rounded-2xl'>
                <h2 className='text-center text-2xl font-medium pb-2'>Premium</h2>
                <p className='text-center text-sm'>Suitable for medium scale business</p>
                <h1 className='text-center font-bold text-5xl pt-2  pb-7'>Rs 45,000</h1>
                
                <ul>
                    {
                        basicPack.map(({feature},key)=>{
                            return (
                                <li className='flex items-center' key={key}>
                                    <BsFillCheckCircleFill />
                                    <p className='pl-3 leading-9'> {feature} </p> 
                                </li>
                            )
                        })
                    }
                    

                </ul>

            </div>
            <div className='shadow-full-shadow-dark p-10 bg-gradient-to-br from-black to-slate-800 text-white rounded-2xl'>
                <h2 className='text-center text-2xl font-medium pb-2'>Professional</h2>
                <p className='text-center text-sm'>Suitable for large Enterprise</p>
                <h1 className='text-center font-bold text-5xl pt-2 pb-7'>Rs 75,000</h1>
                
                <ul>
                    {
                        basicPack.map(({feature},key)=>{
                            return (
                                <li className='flex items-center' key={key}>
                                    <BsFillCheckCircleFill />
                                    <p className='pl-3 leading-9'> {feature} </p> 
                                </li>
                            )
                        })
                    }
                    

                </ul>

            </div>
        </div>
    </div>
  )
}

export default DesktopAppPricing
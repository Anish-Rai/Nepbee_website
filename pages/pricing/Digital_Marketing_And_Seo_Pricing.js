import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const DigitalMarketingPricing = () => {
    const basicPack = [
        {feature:'2 Post'},
        {feature:'2 Advertisement'},
        {feature:'2k-5.7k people reach daily'},
        {feature:'14 days advertisement'},
        {feature:'Monthly planing and strategy'},
        {feature:'Monthly Reporting'},
        {feature:'Good Conversion Rate'},
        {feature:'Customer Targeting'},
        {feature:'24/7 service'},
        {feature:'Total 28k-70k people reach'},
        
    ]
    const premiumPack = [
        {feature:'5 post'},
        {feature:'5 advertisement'},
        {feature:'30 days Marketing'},
        {feature:'Email Marketing'},
        {feature:'Good Conversion Rate'},
        {feature:'Branding and Festive Post'},
        {feature:'Monthly Planning and Strategy'},
        {feature:'Monthly Reporting'},
        {feature:'Total 70k-175k people reach'},
        {feature:'Customer Targeting'},
        {feature:'24/7 service'},
    ]
    const professionalPack = [
        {feature:'10 post'},
        {feature:'10 advertisement'},
        {feature:'30 days Marketing'},
        {feature:'Social Media Handling'},
        {feature:'Email Marketing'},
        {feature:'Good Conversion Rate'},
        {feature:'Branding and Festive Post'},
        {feature:'Monthly Planning and Strategy'},
        {feature:'Monthly Reporting'},
        {feature:'Total 70k-175k people reach'},
        {feature:'Customer Targeting'},
        {feature:'24/7 service'},
    ]
  return (
    <div id='pricing' className='lg:pt-14 lg:pb-32 py-8 px-4  lg:px-44'>
        <h1 className=' text-2xl lg:text-5xl lg:font-bold font-semibold  lg:pt-0 lg:pb-4 pb-3'>Pricings</h1>
        <p className='pb-10'>Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup Pricing and sevices Suitable for individual blogers or startup Suitable for individual blogers or startup</p>
        <div className='grid lg:grid-cols-3 gap-3'>
            <div className='shadow-full-shadow-dark p-10 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl'>
                <h2 className='text-center text-2xl font-medium pb-2'>Basic</h2>
                <p className='text-center text-sm'>Suitable for individual blogers or startup</p>
                <h1 className='text-center font-bold text-5xl pt-2 pb-7'>Rs 10,000</h1>
                
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
                <p className='text-center text-sm'>Suitable for medium Enterprise</p>
                <h1 className='text-center font-bold text-5xl pt-2  pb-7'>Rs 25,000</h1>
                
                <ul>
                    {
                        premiumPack.map(({feature},key)=>{
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
                <p className='text-center text-sm'>Suitable for Large Enterprise</p>
                <h1 className='text-center font-bold text-5xl pt-2 pb-7'>Rs 45,000</h1>
                
                <ul>
                    {
                        professionalPack.map(({feature},key)=>{
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

export default DigitalMarketingPricing
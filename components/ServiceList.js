import React from 'react'
import Image from 'next/image'
import {FaLaptopCode,FaRegChartBar} from 'react-icons/fa'
import {HiDevicePhoneMobile} from 'react-icons/hi2'
import {MdContentPaste} from 'react-icons/md'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {MdDesignServices} from 'react-icons/md'
import {BiDesktop} from 'react-icons/bi'
import {BsCloudCheck} from 'react-icons/bs'
import ServiceItem from '../components/ServiceItem'
export default function ServiceList(){
    const serviceList = [
        {
            logo:FaLaptopCode,
            title:'Web Design & Development',
            description:'Nebee Technology makes unnique  websites and CMS systems for start-ups and businesses since we are aware of the requirements.',
            href : '/sevice',
            slug:"Web_Design_And_Development"
        },
        {
            logo:HiDevicePhoneMobile,
            title:'Mobile App Development',
            description:'With the help of our great mobile app development services, you may alter the way your business operates. ',
            slug:"Mobile_App_Development"
        },
        {
            logo:MdContentPaste,
            title:'Content Writing',
            description:'We are, as our name suggests, a group of highly qualified individuals who produce content. ',
            slug:"Content_Writing"
        },
        {
            logo:AiOutlineFileSearch,
            title:'Digital Marketing & SEO',
            description:'Thanks to our team of experts, who collectively have years of experience, we have been successful in increasing the online exposure of many businesses.',
            slug:"Digital_Marketing_And_SEO"
        },
        {
            logo:MdDesignServices,
            title:'Graphics & Logo Design',
            description:'We can take a creative approach to portraying a business or brand in the best way possible to appeal to their customers.',
            slug:"Graphics_And_Logo_Design"
        },
        {
            logo:BiDesktop,
            title:'Desktop App Development',
            description:'Our main area of expertise is desktop software development. ',
            slug:"Desktop_App_Development"
        },
        {
            logo:BsCloudCheck,
            title:'Domain and Hosting Services',
            description:"If you're looking for a high-end web hosting plan for your website, you have come to the correct place! We provide exceptional web hosting plans.",
            slug:"Domain_And_Hosting_Service"
        },
        {
            logo:FaRegChartBar,
            title:'Data Analytics',
            description:'Using our help, you can navigate the digital environment of today and tomorrow by enhancing your data strategy. We assist businesses with their data strategy.',
            slug:"Data_Analytics"
        },
        
    ]
  return (
    <div id='services' className='lg:pt-20 lg:pb-24  py-10 px-4 bg-slate-50 lg:px-44 relative '>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold pt-4 lg:pt-0 lg:pb-7 pb-3 relative z-20 md:text-center'> OUR SERVICES </h1>
        <span className='block w-[100%] h-[0.1rem] bg-slate-300 lg:mb-5'></span>
        <div className='flex '>
            <ServiceItem serviceList={serviceList}/>

            <div className='lg:w-[20%]  hidden lg:block '>
                <Image src="/person.svg" alt="" width={200} height={200} />
            </div>
            
        </div>
            <Image src="/ellipse_1.svg" alt="" width={200} height={200} className="absolute top-0 left-0 z-10 hidden lg:block" />
            <Image src="/ellipse_2.svg" alt="" width={200} height={200} className="absolute top-1/3 right-0 z-10 hidden lg:block" />
    </div>
    
  )
}
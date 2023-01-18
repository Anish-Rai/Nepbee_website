import React from 'react'
import Image from 'next/image'
import {FaLaptopCode,FaRegChartBar} from 'react-icons/fa'
import {HiDevicePhoneMobile} from 'react-icons/hi2'
import {MdContentPaste} from 'react-icons/md'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {MdDesignServices} from 'react-icons/md'
import {BiDesktop} from 'react-icons/bi'
import {BsCloudCheck} from 'react-icons/bs'

const Services = () => {
    const serviceList = [
        {
            logo:FaLaptopCode,
            title:'Web Design & Development',
            description:'Nebee Technology makes unnique  websites and CMS systems for start-ups and businesses since we are aware of the requirements.'
        },
        {
            logo:HiDevicePhoneMobile,
            title:'Mobile App Development',
            description:'With the help of our great mobile app development services, you may alter the way your business operates. We provide seamless user experiences across all current platforms and devices. '
        },
        {
            logo:MdContentPaste,
            title:'Content Writing',
            description:'We are, as our name suggests, a group of highly qualified individuals who produce content. When you use our expert content services, you collaborate with a group of skilled content marketers, writers, designers, and developers rather than a single person. '
        },
        {
            logo:AiOutlineFileSearch,
            title:'Digital Marketing & SEO',
            description:'Thanks to our team of experts, who collectively have decades of experience, we have been successful in increasing the online exposure of many businesses on the World Wide Web. We analyze the brand, pinpoint the audience, and implement specialized SEO tactics.'
        },
        {
            logo:MdDesignServices,
            title:'Graphic & Logo Design',
            description:'We can take a creative approach to portraying a business or brand in the best way possible to appeal to their customers because of our love for creativity and our great designs. We always make sure that our concepts and designs impress our customers. '
        },
        {
            logo:BiDesktop,
            title:'Desktop App Development',
            description:'Our main area of expertise is desktop software development. Combining our years of experience, years of technical competence, and in-depth knowledge of the low-level desktop operating systems architecture, we are able to provide the whole cycle of desktop application development services required to address the most difficult problems for our customers.'
        },
        {
            logo:BsCloudCheck,
            title:'Domain and Hosting Services',
            description:"If you're looking for a high-end web hosting plan for your website, you have come to the correct place! We provide exceptional web hosting plans that are user-friendly for everyone!"
        },
        {
            logo:FaRegChartBar,
            title:'Data Analytics',
            description:'Using our help, you can navigate the digital environment of today and tomorrow by enhancing your data strategy. We assist businesses with their data strategy.'
        },
        
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
                        <h2 className='flex justify-center text-6xl pt-3'> <Icon /> </h2>
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
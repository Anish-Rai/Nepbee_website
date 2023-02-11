import React from 'react'
import Image from 'next/image'
import {FaQuoteLeft} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
const Testimonial = () => {
  return (
    <div className='lg:px-44 lg:py-20 px-4'>
        
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold pt-9 lg:pt-0 lg:text-center'>TESTIMONIAL</h1>
        <div className='md:grid md:grid-cols-2 md:gap-4 pt-3 lg:pt-10'>
            <div>
                
                <div className=' border  p-4'>
                    <div className='flex'>
                        <Image src="/brad.jpeg" alt='' width={100} height={100} className="rounded-full" />
                        <div className='pt-4 pl-5'>
                            <h4 className='text-xl font-semibold'>Mr. Brad Carson</h4>
                            <h5 className='text-lg font-semibold'>Owner of Son Family Restaurant</h5> 
                        </div>
                    </div>
                    <div className='pt-2'>
                    { [...Array(5)].map((e,i)=>(
                            <AiFillStar className='text-2xl inline-block text-orange-500' key={i} />
                        ))
                       }
                        <p className='pt-2'>
                            It was very pleasant experience working with nepbee team. They were very helpful from the designing phase of the project till the end of the developement of project. They tailored the project according to my need and nailed the project. The project was completed on time and within the budget. Highly reccomended.
                        </p>
                    </div>
                </div>
                
            </div>

            <div className='pt-4 lg:pt-0 pb-7'>
                
                <div className=' border  p-4'>
                    <div className='flex'>
                        <Image src="/bass.png" alt='' width={100} height={100} className="rounded-full" />
                        <div className='pt-4 pl-5'>
                            <h4 className='text-xl font-semibold'>Mr. Ram lila Gurung</h4>
                            <h5 className='text-lg font-semibold'>owner of retail shop</h5> 
                        </div>
                    </div>
                    <div className='pt-2'>
                       { [...Array(5)].map((e,i)=>(
                            <AiFillStar className='text-2xl inline-block text-orange-500' key={i} />
                        ))
                       }
                        <p className='pt-2'>
                            I always wanted to expand the reach of my business and wanted to leverage the internet for that. But I didnt know exactly where to start. I saw the add of Nepbee in facebook and reach out to them. They gave me the idea of how to expand the business online and helped me greately in digital marketing aspects which brought me new sets of customer.
                        </p>
                    </div>
                </div>
                
            </div>
    </div>
    </div>
  )
}

export default Testimonial
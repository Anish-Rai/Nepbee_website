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
                        <Image src="/bass.png" alt='' width={100} height={100} className="rounded-full" />
                        <div className='pt-4 pl-5'>
                            <h4 className='text-xl font-semibold'>Mrs. Laxman Acharya</h4>
                            <h5 className='text-lg font-semibold'>owner of xyz company</h5> 
                        </div>
                    </div>
                    <div className='pt-2'>
                    { [...Array(5)].map((e,i)=>(
                            <AiFillStar className='text-2xl inline-block text-orange-500' key={i} />
                        ))
                       }
                        <p className='pt-2'>
                            Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the 
                        </p>
                    </div>
                </div>
                
            </div>

            <div className='pt-4 lg:pt-0 pb-7'>
                
                <div className=' border  p-4'>
                    <div className='flex'>
                        <Image src="/bass.png" alt='' width={100} height={100} className="rounded-full" />
                        <div className='pt-4 pl-5'>
                            <h4 className='text-xl font-semibold'>Mrs. Laxman Acharya</h4>
                            <h5 className='text-lg font-semibold'>owner of xyz company</h5> 
                        </div>
                    </div>
                    <div className='pt-2'>
                       { [...Array(5)].map((e,i)=>(
                            <AiFillStar className='text-2xl inline-block text-orange-500' key={i} />
                        ))
                       }
                        <p className='pt-2'>
                            Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the Contrary to popular belief, Lorem Ipsum is not simply randord in classical literature, discovered the 
                        </p>
                    </div>
                </div>
                
            </div>
    </div>
    </div>
  )
}

export default Testimonial
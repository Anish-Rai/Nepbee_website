import Image from 'next/image'
import React from 'react'
import FrequentlyAskedQ from '../../components/FrequentlyAskedQ'

const Service = () => {
  
    return (
      <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-[#023A81] lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>We Are Nepal No.1 Mobile App Development Company</h1>  
            <div className='flex justify-end' > <Image src={'/phone.svg'} alt="" width={350} height={300} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into 
        </p>

        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into 
        </p>
        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into 
        </p>
        </div>
        
        {/* accordion FAQ section */}
        <FrequentlyAskedQ />

      </div>
    )
  }

export default Service
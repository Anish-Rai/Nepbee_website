import React from 'react'
import Image from 'next/image'
const Graphics_And_Logo_Design = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-[#023A81] lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Logo and graphics design</h1>  
            <div className='flex justify-end' > <Image src={'/phone.svg'} alt="" width={350} height={300} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>A great graphic design logo should demonstrate your mastery of the principles of design at a glance.A logo is the first thing that customer sees so we ensure your logo is very attractive and professional.
              We Design,develop and produce advertisement that support and correspond with company marketing program and sales.we believe that having to achieve the marketing goals graphic design is the stepping stone.
            Our team will keep you update with the latest trend in the market to keep in touch with the customer.

          </p>
        </div>
        
        {/* accordion FAQ section */}
        {/* <FrequentlyAskedQ /> */}

      </div>
  )
}

export default Graphics_And_Logo_Design
import React from 'react'
import Image from 'next/image'
import GraphicsAndLogoFaq from '../faq/GraphicsAndLogoFaq'
import GraphicsLogoPricing from '../pricing/Graphics_And_Logo_Pricing'
const Graphics_And_Logo_Design = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-green-500 lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Logo and graphics design</h1>  
            <div className='flex justify-end' > <Image src={'/services/logopic.png'} priority alt="" width={550} height={550} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>Nepbee is the leading service provider In logo and graphic design.we have completed hundreds of designs so we have a knowledge of building a great selling advertisement for your next venture.
              A great graphic design logo should demonstrate your mastery of the principles of design at a glance.A logo is the first thing that customer sees so we ensure your logo is very attractive and professional.
              We Design,develop and produce advertisement that support and correspond with company marketing program and sales.we believe that having to achieve the marketing goals graphic design is the stepping stone.
              Our team will keep you update with the latest trend in the market to keep in touch with the customer.We work closely with our clients to understand their business needs, identify their target audience, and define the goals and objectives of their design. Our developers then use this information to create a design that is both functional and visually appealing.
              Our service includes:
          </p>
          <ul className='list-disc pl-4 font-semibold'>
              <li>
                Logo design service 
              </li>
              <li>
                Facebook/Instagram post design and advertisement
              </li>  
              <li>
                twitter post design and advertisement
              </li>
              <li>
                Tiktok post design and advertisement
              </li>
          </ul>
              
             
              
              
        </div>
        <GraphicsLogoPricing />
        {/* accordion FAQ section */}
        <GraphicsAndLogoFaq />

      </div>
  )
}

export default Graphics_And_Logo_Design
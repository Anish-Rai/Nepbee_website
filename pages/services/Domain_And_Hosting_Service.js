import React from 'react'
import Image from 'next/image'
import DomainAndHostingFaq from '../faq/DomainAndHostingFaq'
import DomainHostingPricing from '../pricing/Domain_And_Hosting_Pricing'
const Domain_and_Hosting_Service = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-blue-500 lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Your one-stop solution for powerful and reliable web hosting.</h1>  
            <div className='flex justify-end' > <Image src={'/services/hosting.png'} priority alt="" width={550} height={300} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>Nepbee Technology is a leading provider of web hosting and domain services. Our mission is to provide businesses with affordable and reliable web hosting solutions that meet their specific needs. We understand the importance of having a fast and reliable website, which is why we offer a range of web hosting and domain services that are designed to meet the needs of businesses of all sizes.
            Our web hosting services include:
          </p>
            <ul className='list-disc pl-4'>
              <li>
                <span className='font-bold'>Shared Hosting:</span> Ideal for small to medium-sized businesses, our shared hosting plans offer fast and reliable hosting with 24/7 support.
              </li>
              <li>
                <span className='font-bold'>VPS Hosting:</span> Our VPS hosting plans offer increased performance and control, making them ideal for businesses with growing websites and higher traffic demands.
              </li>
              <li>
                <span className='font-bold'>Dedicated Hosting:</span> Our dedicated hosting plans offer maximum performance and control, making them ideal for businesses with complex websites and high traffic demands.
              </li>
              </ul>
              
              <p className='text-xl lg:pt-8 pt-4'>We also offer domain services, including:</p>
              <ul className='list-disc pl-4'>
              <li>
                <span className='font-bold'>Domain Registration:</span> Register your domain name with us and get complete control over your online presence.
              </li>
              <li>
                <span className='font-bold'>Domain Transfer:</span> Transfer your domain to Nepbee Technology and take advantage of our fast, reliable, and secure web hosting services.
              </li>
            </ul>
            
            <p className='lg:pt-8 pt-4'>
              At Nepbee Technology, we understand the importance of having a fast, reliable, and secure website. Our web hosting services are designed to be fast, secure, and affordable, so you can focus on growing your business without worrying about your website&apos;s performance.
              Our team of experienced technical support specialists is available 24/7 to assist you with any questions or issues you may have. We also offer a 30-day money-back guarantee, so you can try our services risk-free.Get in touch with us today to learn more about our web hosting and domain services and how we can help you achieve your goals
            </p>

        
        </div>
        <DomainHostingPricing />
        {/* accordion FAQ section */}
        <DomainAndHostingFaq />

      </div>
  )
}

export default Domain_and_Hosting_Service
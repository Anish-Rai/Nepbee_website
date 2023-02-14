import React from 'react'
import Image from 'next/image'
import DigitalMarketingPricing from '../pricing/Digital_Marketing_And_Seo'
import DigitalMarkeingFaq from '../faq/DigitalMarketingFaq'
const Digital_Marketing = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-[#168086] lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Grow Your Business With Us</h1>  
            <div className='flex justify-end' > <Image src={'/services/marketing.png'} priority alt="" width={450} height={450} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>Nepbee Technology is a digital marketing and SEO agency that helps businesses increase their online visibility and reach their target audience. Our team of experienced digital marketers and SEO specialists use the latest techniques and strategies to deliver measurable results.

            We offer a comprehensive range of digital marketing services, including:
          </p>
          <ul className='list-disc pl-4'>
            <li>
             <span className=' font-semibold'> Search Engine Optimization (SEO): </span> Our SEO experts will optimize your website to improve its ranking in search engine results pages (SERPs) and drive organic traffic to your site.
            </li>
            <li>
              <span className=' font-semibold'>Pay-per-Click Advertising (PPC):</span> We can help you reach your target audience quickly with targeted PPC campaigns on platforms such as Google AdWords, Bing Ads, and Facebook Ads.
            </li>
            <li>
              <span className=' font-semibold'>Social Media Marketing:</span> We develop and implement social media strategies to help you build your brand, engage with your audience, and drive traffic to your website.
            </li>
            <li>
              <span className=' font-semibold'>Content Marketing:</span> Our content marketers create engaging and informative content that will help you establish your brand as an authority in your industry and attract customers.
            </li>
            <li>
              <span className=' font-semibold'>Email Marketing:</span> We design and execute effective email marketing campaigns to reach your target audience and build relationships with your customers.
            </li>
          </ul>

      <p>
            At Nepbee Technology, we understand that every business is unique and has its own set of challenges and goals. That&apos;s why we work closely with our clients to understand their needs and develop customized solutions that will help them achieve their objectives.

            Our digital marketing and SEO services are designed to be cost-effective, so you can get a return on your investment quickly. We use data-driven techniques to measure the success of our campaigns and make adjustments as needed to ensure that you get the best results.Get in touch with us today to learn more about our digital marketing and SEO services and how we can help you achieve your goals.
        </p>

        
        </div>
        <DigitalMarketingPricing />
        {/* accordion FAQ section */}
        <DigitalMarkeingFaq />

      </div>
  )
}

export default Digital_Marketing
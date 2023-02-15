import React from 'react'
import Image from 'next/image'
import ContentWritingFaq from '../faq/ContentWritingFaq'
import ContentWritingPricing from '../pricing/ContentWritingPricing'
const Content_Writing = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-[#528ddb] lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Write Your Content From Our Experienced Content Writers</h1>  
            <div className='flex justify-end' > <Image src={'/services/contentwriting.png'} priority alt="" width={650} height={700} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>Nepbee Technology is a leading content writing agency that provides high-quality, engaging, and informative content for businesses. Our team of experienced writers creates content that is optimized for search engines, readers, and social media to help businesses increase their online visibility and reach their target audience.
            We offer a comprehensive range of content writing services, including:
          </p>
          <ul className='list-disc pl-4'>
            <li>
             <span className='font-semibold'>Website Content:</span>  Our writers create compelling and informative website content that engages visitors and helps businesses establish their brand as an authority in their industry.
            </li>
            <li>
              <span className='font-semibold'>Blog Writing:</span> We develop and write blog articles that are optimized for search engines, readers, and social media to drive traffic to your website and establish your brand as an expert in your field.
            </li>
            <li>
              <span className='font-semibold'>Social Media Content:</span> Our team creates engaging and shareable social media content that will help you build your brand, engage with your audience, and drive traffic to your website.
            </li>
            <li>
              <span className='font-semibold'>E-mail Marketing: </span>We design and write effective email marketing campaigns that reach your target audience and build relationships with your customers.
            </li>
            <li>
              <span className='font-semibold'>Product Descriptions:</span> Our writers create product descriptions that accurately and compellingly describe your products, making them appealing to potential customers.
            </li>
          </ul>
          <br />
        <p>
            At Nepbee Technology, we understand the importance of quality content in today&apos;s digital age. Our team of writers creates content that is well-researched, original, and relevant to your audience, ensuring that your brand stands out and makes a lasting impression.
            Our content writing services are designed to be affordable, so you can get the quality content you need without breaking the bank. We work closely with our clients to understand their needs and develop customized content solutions that will help them achieve their goals.Get in touch with us today to learn more about our content writing services and how we can help you achieve your goals
        </p>

        
        </div>
        <ContentWritingPricing />        
        {/* accordion FAQ section */}
        <ContentWritingFaq />

      </div>
  )
}

export default Content_Writing
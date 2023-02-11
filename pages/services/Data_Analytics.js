import React from 'react'
import Image from 'next/image'
const Data_Analytics = () => {
  return (
    <div className=''>
        <div className='lg:grid lg:grid-cols-2 bg-[#023A81] lg:px-44 lg:py-20 py-4 px-4 relative flex justify-center items-center'>  
            <h1 className=' lg:text-7xl text-2xl lg:font-bold text-white '>Manage Your Data With Data Engineers</h1>  
            <div className='flex justify-end' > <Image src={'/phone.svg'} alt="" width={350} height={300} className="lg:absolute lg:top-[15%] static" />  </div>
        </div>
        <div className='lg:pl-44 lg:pr-[50%] lg:py-20 py-4 px-4'>
          <p>Nepbee Technology is a leading provider of data analytics services that help businesses turn data into actionable insights. Our team of experienced data analysts leverages the latest technologies and tools to collect, process, and analyze data from a variety of sources, including websites, online marketplaces, and social media platforms.
            Our data analytics services include:
          </p>
          <ul className='list-disc pl-4'>
            <li>
              <span className='font-semibold'>Data Collection: </span>We collect and extract data from websites, online marketplaces, and other sources, and deliver the data in a format that is easy to use and analyze.
            </li>
            <li>
              <span className='font-semibold'>Data Processing:</span> Our team processes the collected data to remove duplicates, correct errors, and standardize the data for easy analysis.
            </li>
            <li>
              <span className='font-semibold'>Data Analysis:</span> We use advanced data analysis techniques to uncover insights and trends that can help businesses make informed decisions.
            </li>
            <li>
              <span className='font-semibold'>Data Visualization:</span> We use interactive data visualizations to help businesses understand the insights and trends identified in the data.
            </li>            
          </ul>
        <p>
            We use the latest technologies, including Python and R, to analyze data and deliver actionable insights that can help businesses make informed decisions. Our team of experienced data analysts is available 24/7 to assist you with any questions or issues you may have.
            At Nepbee Technology, we understand the importance of data-driven decision making. Our data analytics services are designed to be fast, efficient, and cost-effective, so you can get the insights you need without breaking the bank.Get in touch with us today to learn more about our data analytics services and how we can help you achieve your goals.
        </p>

        
        </div>
        
        {/* accordion FAQ section */}
        {/* <FrequentlyAskedQ /> */}

      </div>
  )
}

export default Data_Analytics
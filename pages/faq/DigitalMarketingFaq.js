import React, {useState} from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
const FrequentlyAskedQ = () => {
    const question = [
      {
        q:"What is digital marketing?",
        a:"Digital marketing is the process of promoting products or services using digital technologies, including the internet, mobile devices, social media, search engines, and other channels."
      },
      {
        q:"How is digital marketing different from traditional marketing?",
        a:"Traditional marketing typically involves methods such as print ads, billboards, TV and radio commercials, while digital marketing focuses on promoting products or services using digital technologies. Digital marketing allows for more targeted and measurable campaigns, and often reaches a larger and more diverse audience."
      },
      {
        q:"What are the types of digital marketing?",
        a:"Some of the types of digital marketing include search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, email marketing, affiliate marketing, and influencer marketing."
      },
      {
        q:"What are the benefits of digital marketing?",
        a:"Some of the benefits of digital marketing include increased reach, higher engagement, more cost-effective campaigns, and the ability to target specific demographics and measure the success of campaigns."
      },
      {
        q:"What are the steps in creating a successful digital marketing campaign?",
        a:"The steps in creating a successful digital marketing campaign typically include: setting goals, researching and identifying the target audience, selecting channels, creating and distributing content, and tracking and analyzing the results."
      },
      {
        q:"How can a business measure the success of their digital marketing efforts?",
        a:"The success of a business&apos;s digital marketing efforts can be measured using a variety of metrics, including website traffic, conversions, lead generation, and social media engagement."
      },
      {
        q:"How can a business determine their target audience for digital marketing?",
        a:"A business can determine their target audience for digital marketing by conducting market research, analyzing their customer data, and using tools such as Google Analytics to better understand their website visitors."
      },
      {
        q:"What role does social media play in digital marketing?",
        a:"Social media plays a significant role in digital marketing as it allows businesses to reach a large and engaged audience, build brand awareness, and drive traffic to their website."
      },
    ]
  
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
   
    const customAnimation = {
      mount: { scale: 1 },
      unmount: { scale: 0.9 },
    };
  return (
    <div className='bg-[#F6F6F6]'>
        <div className='lg:px-44 lg:py-20 p-4'>
        <h1 className=' text-2xl lg:text-5xl lg:font-bold font-semibold  lg:pt-0 lg:pb-7 pb-3'>FAQ</h1>
            <hr/>
            {
              question.map(({q,a},key)=>{
                return (
                  <div key={key}>
                    <Accordion open={open === key+1} icon={<Icon id={key+1} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(key+1)} className="w-[100%] text-sm lg:text-xl ">
                                  {q}
                                  
                            </AccordionHeader>
                                <hr/>
                            <AccordionBody>
                                {a}
                            </AccordionBody>
                  </Accordion>
                  </div>
                )
                  
                
              })
            }
        </div>
    </div>
  )
}

export default FrequentlyAskedQ
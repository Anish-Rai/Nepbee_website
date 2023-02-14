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
const MobileAppFaq = () => {
    const question = [
      {
        q:"What is a mobile application?",
        a:"A mobile application, commonly referred to as an 'app', is a software program that is designed to run on a mobile device, such as a smartphone or tablet. Mobile apps can be downloaded from app stores and provide users with a variety of features and functionality, such as games, productivity tools, and social media."
      },
      {
        q:"What is the difference between native and hybrid mobile applications?",
        a:"Native mobile applications are developed specifically for a particular operating system, such as iOS or Android. These apps are written in the programming language that is native to the operating system, and are optimized for the hardware and software of the device. Hybrid mobile applications, on the other hand, are developed using web technologies, such as HTML, CSS, and JavaScript, and are packaged into a native container, allowing them to run on multiple platforms."
      },
      {
        q:"What is the cost of developing a mobile application?",
        a:"The cost of developing a mobile application can vary greatly depending on the complexity of the app, the experience of the development team, and the platform it is being developed for. On average, the cost can range from a few thousand dollars to hundreds of thousands of dollars."
      },
      {
        q:"How long does it take to develop a mobile application?",
        a:"The time it takes to develop a mobile application can vary greatly depending on the complexity of the app and the size of the development team. On average, it can take several months to a year to complete the development of a mobile app."
      },
      {
        q:"What is the process of developing a mobile application?",
        a:"The process of developing a mobile application typically involves the following steps: defining the app&apos;s features and functionality, creating a design and user experience, developing the app, testing and debugging the app, and launching the app in the app store."
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
                            <AccordionHeader onClick={() => handleOpen(key+1)} className="">
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

export default MobileAppFaq
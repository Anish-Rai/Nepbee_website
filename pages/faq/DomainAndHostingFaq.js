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
const DomainAndHostingFaq = () => {
    const question = [
      {
        q:"What is a domain name?",
        a:"A domain name is a unique and recognizable web address used to identify a website on the internet. For example, 'google.com' is a domain name."
      },
      {
        q:"What is a hosting service?",
        a:"A hosting service is a service that provides servers to host and store websites and applications. The hosting provider is responsible for ensuring that the website is accessible to users via the internet."
      },
      {
        q:"What is the difference between shared hosting and dedicated hosting?",
        a:"Shared hosting is when multiple websites are hosted on the same server and share its resources, while dedicated hosting is when a website is hosted on its own dedicated server, with all its resources devoted solely to that website. Dedicated hosting is typically more expensive than shared hosting, but it offers more control, better performance, and greater security."
      },
      {
        q:"What is a virtual private server (VPS) hosting?",
        a:"VPS hosting is a type of hosting service that provides each customer with a virtual private server, which is a virtualized environment that operates as a separate server. This provides a higher level of control and resources compared to shared hosting, but it is less expensive than dedicated hosting."
      },
      {
        q:"What is cloud hosting?",
        a:"Cloud hosting is a type of hosting service that provides hosting resources over a network of servers in a cloud computing infrastructure. This allows websites and applications to scale their resources up or down as needed, and provides increased reliability and performance compared to traditional hosting."
      },
      {
        q:"What is domain registration?",
        a:"Domain registration is the process of registering a domain name for a website. This involves selecting a domain name and paying a fee to a domain registrar to reserve the domain name for a specified period of time."
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

export default DomainAndHostingFaq
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
const DesktopAppFaq = () => {
    const question = [
      {
        q:"What is the difference between desktop app and web app?",
        a:"A desktop application is a software program that is installed locally on a user&apos;s computer and runs on the computer&apos;s operating system. A web application, on the other hand, runs on a remote server and is accessed through a web browser over the internet."
      },
      {
        q:"What are the advantages of developing desktop applications?",
        a:"Desktop applications have the advantage of being able to run offline, having access to a user&apos;s local resources such as files and hardware, and providing a more responsive user experience since they don&apos;t have to communicate with a remote server for every action."
      },
      {
        q:"How do you ensure that a desktop application is secure?",
        a:"To ensure the security of a desktop application, one should follow best practices for software development, such as implementing proper authentication and authorization mechanisms, input validation, and secure data storage. It&apos;s also important to regularly update the application and its dependencies to fix any known security vulnerabilities."
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

export default DesktopAppFaq
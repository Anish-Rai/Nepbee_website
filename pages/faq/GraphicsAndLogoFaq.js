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
const GraphicsAndLogoFaq = () => {
    const question = [
      {
        q:"What is a logo design?",
        a:"A logo design is a visual representation of a company, brand, or organization. It is often used as the primary identifier for a business and can be incorporated into various marketing materials such as websites, business cards, and promotional items."
      },
      {
        q:"What makes a good logo design?",
        a:"A good logo design should be simple, memorable, timeless, and appropriate for the company or brand it represents. It should also be versatile and easily recognizable in various sizes and colors."
      },
      {
        q:"What is the difference between graphic design and logo design?",
        a:"Logo design is a specific type of graphic design that focuses on creating a visual representation for a company, brand, or organization. Graphic design is a broader term that encompasses all forms of visual communication and design."
      },
      {
        q:"How much does it cost to design a logo?",
        a:"The cost of a logo design can vary greatly depending on the complexity of the design."
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

export default GraphicsAndLogoFaq
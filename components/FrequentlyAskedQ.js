import React, {useState} from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
const FrequentlyAskedQ = () => {
    const [open, setOpen] = useState(0);
 
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
            <Accordion open={open === 2} animate={customAnimation}>
            <hr/>
            <AccordionHeader onClick={() => handleOpen(2)} className="">
            How to use Material Tailwind?
            </AccordionHeader>
            <hr/>
            <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making mistakes.
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.
            </AccordionBody>
        </Accordion>
        </div>
    </div>
  )
}

export default FrequentlyAskedQ
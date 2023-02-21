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
const WebDesignAndDevelopmentFaq = () => {
    const question = [
      {
        q:"What is website development?",
        a:"Website development is the process of creating and maintaining websites, including design, coding, content creation, and server administration."
      },
      {
        q:"Why is having a website important for a business?",
        a:"Having a website is important for a business as it provides an online presence, increases brand visibility and credibility, enables online transactions, and helps to reach a wider audience."
      },
      {
        q:"What are the different types of websites?",
        a:"There are several types of websites, including e-commerce websites, informational websites, personal websites, business websites, and portfolio websites."
      },
      {
        q:"How long does it take to develop a website?",
        a:"The time it takes to develop a website can vary depending on the complexity of the project and the size of the development team. A basic website can be developed in a few weeks, while a more complex website can take several months or more."
      },
      {
        q:"How much does it cost to develop a website?",
        a:"The cost of developing a website varies depending on the type of website, the features and functionality required, and the level of custom development needed. A basic website can cost anywhere from a few hundred to a few thousand dollars, while a more complex e-commerce website can cost tens of thousands of dollars."
      },
      {
        q:"What is responsive design and why is it important?",
        a:"Responsive design is a website design approach that ensures a website looks and functions well on all devices, including desktop computers, laptops, tablets, and smartphones. It is important because it helps improve user experience and increase the chances of a website ranking well in search engines."
      },
      {
        q:"What is website maintenance and why is it necessary?",
        a:"Website maintenance is the process of keeping a website updated and functioning smoothly. It is necessary because it helps ensure the website remains secure, performs well, and provides a positive user experience."
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

export default WebDesignAndDevelopmentFaq
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
const ContentWritingFaq = () => {
    const question = [
      {
        q:"What is content writing?",
        a:"Content writing is the process of creating written material for the purpose of publishing on the internet or other digital media platforms. This can include writing articles, blog posts, product descriptions, website content, and other forms of online writing."
      },
      {
        q:"What skills are required for content writing?",
        a:"A content writer should have strong writing skills, including grammar, spelling, and sentence structure, as well as a good understanding of the target audience and the ability to write in a clear and engaging style. Research skills, SEO knowledge, and the ability to write for different formats and platforms are also important."
      },
      {
        q:"What is the difference between content writing and copywriting?",
        a:"Content writing focuses on creating informative and educational content, while copywriting focuses on writing material that is designed to sell or promote a product or service. Both require strong writing skills, but the focus and tone of the writing are different."
      },
      {
        q:"How do you write effective content?",
        a:"Writing effective content involves understanding the target audience, researching the topic, organizing the content in a clear and logical manner, using appropriate language, and including appropriate images and other multimedia elements. It is also important to optimize the content for search engines and ensure that it is engaging and easy to read."
      },
      {
        q:"What is SEO and how does it relate to content writing?",
        a:"SEO (Search Engine Optimization) is the process of optimizing website content to improve its ranking in search engine results pages. Content writers must be familiar with SEO best practices and write content that is optimized for search engines while still being engaging and relevant to the target audience."
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

export default ContentWritingFaq
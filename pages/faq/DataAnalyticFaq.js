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
const DataAnalyticFaq = () => {
    const question = [
      {
        q:"What is data analysis?",
        a:"Data analysis is the process of evaluating data to extract insights, draw conclusions, and support decision-making. This involves collecting and cleaning data, performing statistical analysis, and using visualization tools to present the findings."
      },
      {
        q:"What skills are required for a data analyst?",
        a:"A data analyst should have strong technical skills in programming, statistics, and data management, as well as business knowledge and problem-solving skills. Additionally, a data analyst should be proficient in data visualization, communication, and presentation skills to effectively convey insights to stakeholders."
      },
      {
        q:"What tools are commonly used by data analysts?",
        a:"Common tools used by data analysts include SQL for data management and retrieval, programming languages such as Python and R for data analysis and modeling, and data visualization tools such as Tableau and PowerBI."
      },
      {
        q:"What is the difference between a data analyst and a data scientist?",
        a:"A data analyst typically focuses on collecting, cleaning, and analyzing data to support decision-making, while a data scientist is involved in more complex tasks such as developing predictive models, building machine learning algorithms, and conducting advanced statistical analysis."
      },
      {
        q:"How do you clean and prepare data for analysis?",
        a:"Cleaning and preparing data for analysis involves checking for missing or duplicate values, handling missing values appropriately, converting data into the correct format, and ensuring that the data is consistent and accurate. This process is crucial for obtaining accurate insights from data analysis."
      },
      {
        q:"What is statistical analysis and why is it important for data analysis?",
        a:"Statistical analysis is the use of mathematical and statistical methods to describe, summarize, and make inferences from data. It is important in data analysis as it allows data analysts to identify patterns, relationships, and trends in the data, which can be used to support decision-making and identify areas for improvement."
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

export default DataAnalyticFaq
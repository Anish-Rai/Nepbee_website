import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  const projectList = [
    {projectName:'project1.jpg'},
    {projectName:'project2.jpg'},
    {projectName:'project3.jpg'},
    {projectName:'project2.jpg'},
    {projectName:'project3.jpg'},
    {projectName:'project1.jpg'},
  ]

  const projectTypeList = [
    {projectType:'All'},
    {projectType:'Analytics'},
    {projectType:'Web'},
    {projectType:'Design'},
  ]
  return (
    <div id='portfolio' className='lg:pt-20  py-10 px-4  lg:px-44 text-center'>
      <h1 className=' text-2xl lg:text-5xl lg:font-bold font-semibold  lg:pt-0 lg:pb-2 pb-3'>PORTFOLIO</h1>
      <p className='text-lg '>Our recent projects</p>
      <ul className='flex justify-center pt-3'>
        {projectTypeList.map(({projectType},key)=>{
          return (
            <li key={key} className='px-4 border rounded-full mx-1 mb-2 hover:border-pinkish'>{projectType}</li>
          )
        })}
      </ul>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 pt-7 gap-4'>
        { projectList.map(({projectName},key)=>{
          return (
            <div key={key}>
              <Image src={`/${projectName}`} alt="" width={400} height={400} className=" w-[100%] h-[100%] transition-transform duration-300 ease-in-out hover:scale-105 py-1" />
            </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
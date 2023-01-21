import React, { useState } from 'react'
import Image from 'next/image'

const Portfolio = () => {
  const projectTypeList = [
    {projectType:'All'},
    {projectType:'Analytics'},
    {projectType:'Web'},
    {projectType:'Design'},
  ]

  const projectList = [
    {projectName:'project1.jpg',categories:'web'},
    {projectName:'project2.jpg',categories:'analytics'},
    {projectName:'project3.jpg',categories:'web'},
    {projectName:'project2.jpg',categories:'design'},
    {projectName:'project3.jpg',categories:'web'},
    {projectName:'project1.jpg',categories:'web'},
  ]
  const [items, setItems] = useState(projectList)
  const [active, setActive] = useState('All')
  const itemHandler = (item) => {
    const updatedItem = projectList.filter((curItem)=>{
      return curItem.categories === item
    })
    console.log(item)
    setItems(updatedItem)
  }
  
  return (
    <div id='portfolio' className='lg:pt-20  py-10 px-4  lg:px-44 text-center'>
      <h1 className=' text-2xl lg:text-5xl lg:font-bold font-semibold  lg:pt-0 lg:pb-2 pb-3'>PORTFOLIO</h1>
      <p className='text-lg '>Our recent projects</p>
      <ul className='flex justify-center pt-3'>
        {projectTypeList.map(({projectType},key)=>{
          return (
            projectType === 'All' ? <li key={key} className={`hover:cursor-pointer px-4 border rounded-full mx-1 mb-2 hover:border-pinkish ${active===projectType?'border-pinkish text-pinkish':'border-black'}`}  onClick={()=>{setItems(projectList); setActive('All')}}>{projectType}  </li>
                        : <li key={key} className={`hover:cursor-pointer px-4 border rounded-full mx-1 mb-2 hover:border-pinkish ${active===projectType?'border-pinkish text-pinkish':'border-black'}`} onClick={()=>{itemHandler(projectType.toLowerCase()); setActive(projectType)}}>{projectType} </li>
           
          )
        })}
      </ul>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 pt-7 gap-4'>
        { items.map(({projectName,categories},key)=>{
          return (
            <div key={key}>
              <Image src={`/${projectName}`} alt="" width={400} height={400} className="hover:cursor-pointer w-[100%] h-[100%] transition-transform duration-300 ease-in-out hover:scale-105 py-1" />
            </div>
            
            
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
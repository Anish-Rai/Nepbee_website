import React from 'react'
import Image from 'next/image'
const Teams = () => {
    const teamMemberList = [
        // {name:'person1.svg', title:'Laxman Acharya,',description:'Full Stack Developer'},
        {name:'anushil.png', title:'Anushil Karki,',description:'Backend Developer'},
        {name:'anish.png', title:'Anish Rai,',description:'Data Analyst'},
        {name:'nishant.png', title:'Nishan Bhattarai,',description:'Frontend Developer'},
        {name:'bibek.png', title:'Bibek Bhattarai,',description:'Backend Developer'},
        {name:'bass1.png', title:'Kaushal Bhattarai,',description:'Graphics Designer, UI/UX'},
        // {name:'person3.svg', title:'Suman Neupane,',description:'Backend Developer'},
    ]
  return (
    <div id='teams' className='lg:pt-14 lg:pb-32 py-8 px-4  lg:px-44 bg-[#FED8B1] text-center'>
        <h1 className=' text-2xl lg:text-5xl lg:font-bold font-semibold  lg:pt-0 lg:pb-7 pb-3'>Our Teams</h1>
        <h3 className='text-left pb-7'>Meet some of our team members. Our team consists of highly experienced and talented individuals who are upto date with current markets tools and technologies</h3>
        <div className='grid lg:grid-cols-2 gap-20'>
            <div className='relative hidden lg:block'>
                <Image src='/fullperson1.svg' alt="" width={400} height={400} className="absolute w-[100%] h-[100%]" />
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
                {
                    teamMemberList.map(({name,title,description},key)=>{
                        return (
                            <div key={key}> 
                                <div className='flex justify-center items-center '> 
                                    <Image src={`/${name}`} alt="" width={200} height={200} className=" w-[100%] lg:w-[100%] rounded-full" />
                               </div>
                                <h3 className='text-xl font-semibold'> {title} </h3>
                                <p> {description} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default Teams
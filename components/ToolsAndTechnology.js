import React from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const ToolsAndTechnology = () => {
    const imageLink = [
    'html',
    'css',
    'django',
    'js',
    'nodejs',
    'laravel',
    'react',
    'nextjs',
    'tailwind',
    'mysql',
    'powerbi',
    'tableau',
    ]
  return (
    <div className='lg:py-20 px-4 py-10 lg:px-44'>
        <h1 className='text-2xl lg:text-5xl lg:font-bold font-semibold pt-4 lg:pt-0 lg:text-center'>Tools & Technologies</h1>
       <div className='pt-12'>
        <Marquee speed={100} pauseOnHover>
                    {
                        imageLink.map((item)=>{
                            return <Image alt='' src={`/toolsandtechnology/${item}.png`} height={150} width={150} key={item} className={`${item==('nodejs') || item==('powerbi') || item==('tailwind') ? 'p-0':'p-9'} `} />
                        })
                    }
                    
         </Marquee>
                </div>
                
            </div>
  )
}

export default ToolsAndTechnology
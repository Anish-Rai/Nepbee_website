
import { useState,useEffect } from "react";
import PricingItem from "../components/PricingItem";
export default function Index({pricingData}) {
  const data = pricingData
  const [dataHolder,setDataHolder] = useState(data)
  const [filter, setFilter] = useState('Web_Design_And_Development')
  const filterData = () =>{
    const temp = data.find(ele =>ele.slug==filter)
    setDataHolder(temp)
   
  };


useEffect(() => {
  
  filterData();
}, [filter])



  return (
    <div className="bg-gray-200 text-center">
      <div className=" py-10">
        <h1 className="text-2xl lg:text-5xl font-semibold py-4 lg:pt-0">Pricing & Planning</h1>
        <p>Whether you are a small startup or giant business, we have packages setup according to your need and budgets.</p>
      </div>
      <div>
    </div>
        <div className="">
          
          <ul className=" shadow-lg bg-gray-300 flex justify-between   overflow-x-auto lg:overflow-hidden">
        {
          pricingData.map(({slug})=>{
            const  result = slug.replace(/_/g,' ');
              return (
                  <li key={slug}
                      onClick={()=>setFilter(slug)} 
                      className={`${filter==slug?'bg-white':''} border-l p-3 text-sm lg:text-lg font-bold  hover:cursor-pointer hover:bg-blue-50  border-blue-100 flex-shrink-0 lg:flex-shrink`}
                      >
                      {result}
                  </li>
              )
          })
        }
        </ul>
          <div className="lg:px-44 px-4 py-16">
            <PricingItem originaldata={data} data={dataHolder} filter={filter} />
          </div>
        </div>
      
    </div>
  );
}


export async function getServerSideProps() {
    const response = await fetch(`http://127.0.0.1:3000/api/pricing`)      
    const data = await response.json()
    const jsonData = JSON.parse(data)
    return {
        props: {
            pricingData:jsonData.pricingList
        }
     };
}
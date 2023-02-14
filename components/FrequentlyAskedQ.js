import React, {useState} from 'react'


const FrequentlyAskedQ = () => {
   const [open,setOpen] = useState(0)
   const handleOpen = (value) =>{
      const tem = value
      const count = 0
      if (count==0){
        setOpen(value)
      }
      
      

   }

  return (
    <div>
      <div>
        <h1 onClick={()=>{handleOpen(1)}}> what what what?</h1>
        <p className={`${open==1?'block':'hidden'}`}>hellow how are tou sdfl sadfklsdjl fjsldkf jsldf </p>
      </div>
      <div>
        <h1 onClick={()=>{handleOpen(2)}}> what what what?</h1>
        <p className={`${open==2?'block':'hidden'}`}>hellow how are tou sdfl sadfklsdjl fjsldkf jsldf </p>
      </div>
    </div>

  )
}

export default FrequentlyAskedQ
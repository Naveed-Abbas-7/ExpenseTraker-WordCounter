import { Input } from 'postcss'
import React from 'react'
import { useState } from 'react'


  


const Hero = () => {


  const [count , setcount] = useState(0);
    const dataInputs = [
        {
            id :1,
            type : "text",
            placeholder : "Enter your name",
    
        },
        {
            id :2,
            type : "email",
            placeholder : "Enter your Email",
    
        },
        {
            id :3,
            type : "num",
            placeholder : "Enter your num",
    
        },
        {
            id :4,
            type : "text",
            placeholder : "Enter your adress",
    
        },
    ]
  return (
    <>
    <div className='flex  lg:gap-[4rem] gap-[0rem] md:flex-row flex-col overflow-hidden'>
      
     <div className='text-white lg:text-[4rem] text-[3rem] font-semibold lg:mt-[5rem] mt-[3rem]  '>  
      <h1 className='ml-10'>NEW ADVENTURES</h1>
      <h1 className='flex items-center ml-10 '>EVERY FRIDAY</h1>
     </div>

    
     <div className=' flex flex-col lg:w-[40%] w-[100%] gap-[20px]  p-[4rem]'>
       
          {  dataInputs.map(({id,placeholder,type})=>{
                return(
                  
                <input key={id} className='p-2 rounded-lg' type={type}
                placeholder={placeholder} />
                
                
                )
            
              })
                
        }
      
        <div className='flex justify-center'>
          <button  className='py-2 px-5 rounded-xl text-black bg-slate-100'>{count}</button>
        <button className='text-white bg-orange-600 py-2 px-5 rounded-xl' onClick={()=>{
          setcount(count +1)
        }}>click here</button>

        </div>
       </div>
      </div>


  
    </>
  )
}

export default Hero
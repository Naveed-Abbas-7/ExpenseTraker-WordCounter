import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

const Expense = () => {
    const[data, setdata] =useState([
       
    ])
    const [name, setname] = useState("")
    const [price, setprice] = useState(0)
    const[search,setsearch] = useState()
    
    

    const handledelete =(id)=>{
       setdata(data.filter((items)=>{
        return  items.id !== id
        })) 
            
        
    }
   
    const handlesubmit =(e)=>{
        e.preventDefault();
        setdata((prevExpanse) =>[...prevExpanse, {id :Date.now(), name :name,price:price}],);


        setname("")
        setprice("")
    };
    const searcharray = search ? data.filter((items)=>{
        return items.name.includes(search)
    })

    : data;

    


    return(
        <>
        <div className="h-screen flex flex-col items-center justify-center w-[100%]">
            <h2 className='text-white text-[3rem]'>Expense Tracker</h2>

            <form className='flex flex-col w-[100%] gap-y-[2rem] mx-auto items-center ' action="" 
            onSubmit={handlesubmit}>
                <input type="text"
                className='flex py-3 px-5 rounded-lg w-[50%]'
                    
                   placeholder='enter name' 
                   value = {name}
                   onChange={(e)=>setname(e.target.value)}
 
                />
                <input  type="number "
                   className='flex py-3 px-5 rounded-lg w-[50%]'
                   placeholder='enter price' 
                   value = {price}
                   onChange={(e)=>setprice(e.target.value)}

                />
                <button
                type="submit"
                className='bg-orange-600 w-[15%] py-2 px-4 rounded-lg shadow-xl '
                >Add</button>
                

            </form>
            <div className='w-[100%] text-center'>
            <input placeholder='Search Items Here' className='mt-6 py-2 w-[30%] rounded-3xl placeholder:text-center' type="search" value={search} onChange={(e)=>setsearch(e.target.value)} />

            </div>
            <div className="w-[100%] ">
                {
                searcharray.map((items)=>{
                   return(
                  <ul
                     // key={items.id}
                    className="flex justify-around px-8 my-4 w-[70%] bg-gray-500 rounded-lg mx-auto py-2 text-xl">
                                <li  >{items.id}</li>
                                <li>{items.name}</li>
                                <li>{items.price}</li>
                                <MdDelete onClick={()=>handledelete(items.id)}/>
                            </ul>
                        )
                    })
                }
            </div>

        </div>
        </>
    )

}

export default Expense
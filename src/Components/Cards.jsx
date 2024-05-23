import React from 'react'
import image1 from '../assets/images.jpg'



const carddata =[
  {
    id: 1,
    img: image1,
    paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laboriosam odit facilis, natus nesciunt pariatur, ratione placeat libero at hic, voluptas inventore quisquam! Totam ratione rem error necessitatibus! Sed, repudiandae.`,
    btntext : `see more`
  },
  {
    id: 2,
    img: image1,
    paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laboriosam odit facilis, natus nesciunt pariatur, ratione placeat libero at hic, voluptas inventore quisquam! Totam ratione rem error necessitatibus! Sed, repudiandae.`,
    btntext : `see more`
  },
  {
    id: 3,
    img: image1,
    paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laboriosam odit facilis, natus nesciunt pariatur, ratione placeat libero at hic, voluptas inventore quisquam! Totam ratione rem error necessitatibus! Sed, repudiandae.`,
    btntext : `see more`
  },
  {
    id: 4,
    img: image1,
    paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laboriosam odit facilis, natus nesciunt pariatur, ratione placeat libero at hic, voluptas inventore quisquam! Totam ratione rem error necessitatibus! Sed, repudiandae.`,
    btntext : `see more`
  },
  {
    id: 5,
    img: image1,
    paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laboriosam odit facilis, natus nesciunt pariatur, ratione placeat libero at hic, voluptas inventore quisquam! Totam ratione rem error necessitatibus! Sed, repudiandae.`,
    btntext : `see more`
  },
  {
    id: 6,
    img: image1,
    paragraph: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laboriosam odit facilis, natus nesciunt pariatur, ratione placeat libero at hic, voluptas inventore quisquam! Totam ratione rem error necessitatibus! Sed, repudiandae.`,
    btntext : `see more`
  }
]

const Cards = () => {
  


  return (
    <>
    
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-[2rem] mx-auto w-[90%] overflow-hidden  '>
      {
        carddata.map(({id,img,paragraph,btntext})=>{
          return(
            <>
            <div className='bg-slate-300 rounded-xl overflow-hidden shadow-xl' key={id}>
              <div className='overflow-hidden'>
                <img  className='w-[100%] transition-all ease-in-out delay-125 hover:scale-125' src={image1} alt="" />
              </div> 
                <p  className='text-black py-2 px-4'>{paragraph}</p>
                <button className='bg-orange-600 w-[100%] py-3 rounded-2xl hover:bg-orange-800'>{btntext}</button>
              
               
            </div>

            </>
 
          )
          
        })
      }
    </div>
    </>
  )
}

export default Cards
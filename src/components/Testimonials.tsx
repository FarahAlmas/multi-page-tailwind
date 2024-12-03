import React from 'react'
import { FaStar } from "react-icons/fa6";
import Image from 'next/image';
import {Items} from "@/constant/data"

function Testimonials() {
  return (
    <>
    <section className='
    w-full
    px-[24px] xsm:px-[64px]
    py-[112px]'>
      <h1 className='my_h1 mb-[24px]'>Customer Testimonials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
       
      {/* card Div */}

    <div className='w-full flex flex-row mt-[80px] gap-[32px] overflow-x-auto'>
      {/* card */}
      {Items.map((data, index) =>{return (
       <div className=' shrink-0 grow-0 p-[32px] w-[362px] border-[1px] border-black' key={index}>
        <div className='flex gap-1 mb-[24px]'>
        {[...Array(data.star)].map((_,index) => {
                return <FaStar size={20} key={index}/>
        })}
        </div>
        <p className='mb-[24px]'>{data.text}</p>
        <div className='flex gap-[20px]'>
        <div className='w-[56px] h-[56px] rounded-full overflow-hidden '>
          <Image src={data.src} alt={"team3"} width={56} height={56}>
        </Image>
        </div>
        <div className='h-full flex flex-col justify-start'>
          <p>{data.name}</p>
          <p>{data.description}</p>
        </div>
        </div>
      </div> 
      )})}
      
    </div>
    </section>
    </>
    
  )
}

export default Testimonials
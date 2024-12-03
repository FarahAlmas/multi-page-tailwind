import React from 'react'
import Image from "next/image"
import { courseData } from '@/constant/CoursesCard'


function CoursesCards() {
  return (
    <>
 {courseData.map((items,index)=>{
    return( 

        <div className='w-[410px] h-[132px] bg-[#F7F7F7] flex justify-between p-4 items-center' key={index}>
        <div className='p-4'>
          <Image src={items.src} alt='design' width={100} height={100} />
  
        </div>
        <div className='w-[246px] h-[57px]'>
          <p className='font-[600] text-[20px] leading-[30px]'>{items.title}</p>
  
          <p className='font-[400] text-[18px] leading-[27px]'>{items.describtion}</p>
  
        </div>

      </div>

    
      
        
  
      )
 })}
  </>
  )
}

export default CoursesCards
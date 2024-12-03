import React from 'react'
import Image from 'next/image'
import { FaRegStar } from 'react-icons/fa'
import { Button } from './ui/button'
import { serviceData } from '@/constant/servicescard'

function ServicesCard() {
  return (
    <>
   {serviceData.map((items, index) => {
    return(
        <div className="max-w-xs mx-auto bg-[#F7F7F7] border-[1px]  rounded-lg overflow-hidden" key={index}>
    
        <div className="relative h-48">
          <Image
            src={items.src} 
            alt="UX/UI Design Course"
            width={400}
            height={200}
          />
        </div>
      
        <div className="p-6">
      
         <p className="text-sm font-medium text-black pt-8">{items.heading}</p>
         <div className='flex justify-end gap-1 m'>
    
         <FaRegStar size={24} color='#D9D9D9
         '/>
          <p>5.0</p>
    
         </div>
          <h2 className="text-[24px] font-semibold text-[#000000] leading-[33px]">{items.title}</h2>
          <p className="text-sm text-[#000000] mt-2">
           {items.description}
          </p>
      
          <div className="flex  items-center justify-between mt-4 pr-[172px] gap-8">
    
          <Button className='bg-white border-[1px] border-[black] text-black hover:bg-transparent'>Enroll Now</Button>
            
            <span className="text-[16px] font-normal text-[#000000] ">$400</span>
    
      
          </div>
      
        </div>
      </div>
    )
   })}
      
    </>
  )
}

export default ServicesCard
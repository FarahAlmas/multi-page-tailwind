import React from 'react'
import Image from 'next/image'
import {FaLinkedin} from "react-icons/fa6"
import {FaTwitter} from "react-icons/fa"
import {CiGlobe} from "react-icons/ci"
import {Button} from "./ui/button"
import {Items} from "@/constant/data"

function AboutUs() {
  return (
    <>
    <section className="
    w-full
    py-[48px] xsm:py-[112px]
    text-center
    bg-headerColor
    ">
      <h1 className="my_h1 mb-[24px]">Our team</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


      {/* card Div */}
      <div className='
      w-full
      h-[723px] xsm:h-auto
      grid
      grid-cols-1 xsm:grid-cols-3
      xsm:grid-rows-2
      gap-x-[48px]
      gap-y-[48px] xsm:gap-y-[64px]
      my-[48px] xsm:mt-[80px]
      overflow-y-auto
      '>

      {Items.map((data, index) => (    
      <div className='flex flex-col justify-center' key={index}>
         <div className='inline-block m-auto mb-[24px]'>
          <Image src={data.src} alt="team1" width={80} height={80}></Image>
         </div>
          <h1 className='text-[20px] leading-[150%] font-semibold'>{data.name}</h1>

        <p className='text-[18px] leading-[150%] mb-[24px]'>{data.description}</p>
        
        <div className='flex justify-center gap-[14px] m-auto'>
          <FaLinkedin size={24}/>
          <FaTwitter size={24}/>
          <CiGlobe size={24}/>
          </div>
      </div>
        ))}
       
       </div>
        <Button variant="transparentBtn" className="
        mt-[48px]
        xsm:hidden
        ">
          View All
        </Button>
      </section>
    </>
    )
    }

export default AboutUs
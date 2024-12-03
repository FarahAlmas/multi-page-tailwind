import React from 'react'
import CoursesCards from './CoursesCards';

function Courses() {
  return (
    <>
      <section className='w-full  pt-[112px]'>
        <div className='flex flex-col items-center'>
          <h2 className='
          font-bold 
          text-[30px] xsm:text-[48px] 
          xsm:leading-[57.6px] 
          text-[#000000]'>Explore Courses By Category</h2>

          <p className='
          mt-[24px] 
          text-[18px] 
          xsm:leading-[27px] 
          xsm:text-[400] 
          mb-[50px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

        </div>

        {/* <div className='w-full mt-[100px] flex gap-[24px] flex-wrap items-center'> */}
        <div className='
        grid 
        grid-cols-1 xsm:grid-cols-3 
         gap-5
         '>
    
   
        <CoursesCards/>

        <div className='w-[155px] h-[48px] border-solid xsm:mx-[112.5px] xsm:px-[445px] mt-[50px]'> 
<button className='w-[155px] h-[48px] border-solid border-black border-[1px] rounded-[5px]'>View All Courses</button>
</div> 

        </div>

      </section>
    </>
  )
}

export default Courses
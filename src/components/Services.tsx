import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import ServicesCard from './ServicesCard';

function Services() {
  return (
    <>
      <section className="w-full pt-[112px] px-4 sm:px-8 lg:pt-[112px] lg:h-[1742px]">
        {/* Title Section */}
        <div className="w-full max-w-[768px] mx-auto flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[56px] lg:leading-[67px]">
            Courses
          </h1>
          <p className="font-normal text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] pt-4">
            Your Ultimate Guide to learning
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full flex justify-center items-center mt-8">
          <ul className="flex gap-6 sm:gap-8 lg:gap-[24px] justify-center items-center">
            <Link href="#!" className="font-bold underline underline-offset-4">
              <li>Popular</li>
            </Link>
            <Link href="#!">
              <li>Recommended</li>
            </Link>
            <Link href="#!">
              <li>Best Price</li>
            </Link>
          </ul>
        </div>

        {/* Commented Section for Courses */}
        <div className="w-full flex flex-col mt-[40px] sm:mt-[104px] flex-wrap items-center">
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-9">
            <ServicesCard />
          </div>
          <div className="flex justify-center items-center pt-8 sm:pt-[64px]">
            <Button className="bg-white border-[1px] border-black text-black hover:bg-transparent">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
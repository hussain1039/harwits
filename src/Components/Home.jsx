import React from 'react'
import HeroVideo from '../Assets/main-vedio.mp4';
import { FaArrowRight } from "react-icons/fa";
import Shipping from '../Assets/shipping.png'
import { FaCheck } from "react-icons/fa";
const features = [
  "Comprehensive Digital Solutions",
  "Proven track record of success",
  "End-to-End Support",
  "Data Driven Insights",
  "Continuous Improvement",
  "Experienced Team",
  "Result Oriented Support"
];

function Home() {
  return (
    <>

      {/* ========= Section 1.1 ========= */}
      <div className='w-full bg-[#23042a] container py-[3rem] lg:py-[3.5rem]'>
        <div className='text-white text-center mb-10 lg:mb-14 space-y-3 lg:space-y-5'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
            Introducing HARWITS
          </h1>
          <p className='text-[16px] lg:text-[19px]'>
            The #1 Place To Learn Dropshipping & E-commerce in 2024
          </p>
        </div>

        <div className='flex flex-col sm:flex-row justify-between'>

          {/* ======== Text Content ======== */}
          <div className='w-full px-4 sm:px-0 sm:w-[50%] text-white'>
            <h1 className='text-2xl sm:text-[1.5rem] xl:text-4xl font-[700]'>
              E-commerce & Dropshipping: A Modern Retail Revolution
            </h1>
            <p className='text-[16px] lg:text-[19px] my-5 lg:my-8'>
              E-commerce dropshipping has become a popular business model, especially for entrepreneurs wanting to break into the retail market without significant upfront costs. By utilizing the internet, dropshipping enables business owners to sell products directly to consumers without needing to manage any inventory.
            </p>
            <button className='mt-8 primary-btn flex items-center gap-4 btn-shadow'>
              BOOK MEETING
              <FaArrowRight />
            </button>
          </div>

          {/* ========= Hero Video ======== */}
          <div className='w-full px-4 sm:px-0 mt-10 sm:mt-0 sm:w-[45%] flex items-center'>
            <video
              autoPlay
              loop
              src={HeroVideo}
              type="video/mp4"
              className='w-[100%] rounded-lg'></video>
          </div>
        </div>
      </div>

      {/* ========= section 1.2 ========= */}
      <div className='w-full bg-[#290532] container py-[3rem] lg:py-[3.5rem]'>
        <div className='text-center text-white mb-10 lg:mb-14'>
          <h1 className='text-2xl sm:text-3xl lg:text-[2.0rem] font-bold'>ABOUT US</h1>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-10'>

          {/* ========== Text Content ========== */}
          <div className='px-5 text-center md:text-start'>
            <h1 className='text-2xl lg:text-3xl font-semibold text-white'>Transforming Vision into Reality</h1>
            <p className='mt-5 lg:mt-7 text-white text-[17px] lg:text-[19px]'>
              At HARWITS, we focus on helping businesses grow with smart Digital Solutions. Our skilled team offers a full spectrum of services, from website development and digital marketing to e-commerce & essentials like Graphic Designing & Video Editing. We create bespoke solutions that empower businesses to excel and stand out in a crowded marketplace.
            </p>
            <div className='flex flex-wrap mt-5 lg:mt-7'>
              {
                features.map((feature, i) => (
                  <div className='flex items-center text-[17px] lg:text-[19px] text-white gap-2' key={i}><FaCheck className='text-[#7811ff]'/>{feature}&nbsp;&nbsp;&nbsp;&nbsp;</div>
                ))
              }
            </div>
            <button className='mt-8 primary-btn flex items-center gap-4 btn-shadow'>
              CLAIM YOUR SPOT
              <FaArrowRight />
            </button>
          </div>

          {/* ========== Image section ========== */}
          <div className='w-[100%]'>
            <img src={Shipping} alt="image" className='rounded-lg w-full' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
import React from 'react'
import HeroVideo from '../Assets/main-vedio.mp4';
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className='w-full h-[87vh] bg-[#23042a] container py-[3.5rem]'>
        <div className='text-white text-center mb-12 space-y-6'>
          <h1 className='text-4xl font-bold'>
            Introducing HARWITS
          </h1>
          <p className='text-[19px]'>
            The #1 Place To Learn Dropshipping & E-commerce in 2024
          </p>
        </div>

        <div className='flex justify-between'>

          {/* ======== Text Content ======== */}
          <div className='w-[45%] text-white mx-auto'>
            <h1 className='text-4xl font-[700]'>
              E-commerce & Dropshipping: A Modern Retail Revolution
            </h1>
            <p className='text-[17px] my-8'>
              E-commerce dropshipping has become a popular business model, especially for entrepreneurs wanting to break into the retail market without significant upfront costs. By utilizing the internet, dropshipping enables business owners to sell products directly to consumers without needing to manage any inventory.
            </p>
            <button className='primary-btn flex items-center gap-4 btn-shadow'>
              CLAIM YOUR SPOT
              <FaArrowRight />
            </button>
          </div>

          {/* ========= Hero Video ======== */}
          <div className='w-[45%] mx-auto'>
            <video src={HeroVideo} className='w-[100%] rounded-lg'></video>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
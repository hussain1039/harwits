import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from '../Assets/drop-shipping.png'

const DropShipping = () => {
    return (
        <>
            <div className='w-full bg-[#290532] container py-[3rem] lg:py-[3.5rem]'>

                <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-0'>

                    {/* =========== Text Section ========= */}
                    <div className='w-full md:w-[65%] flex flex-col justify-start items-start gap-4 lg:gap-6 text-white'>
                        <h3 className='text-[1rem] md:text-[1.2rem] font-semibold'>The Guide To Your First Ever Sale</h3>
                        <h1 className='text-2xl md:text-[1.6rem] lg:text-4xl font-bold'>The E-book that'll change your Dropshipping journey forever</h1>
                        <p className='text-[16px] lg:text-[18px]'>We’re excited to announce the release of our comprehensive Dropshipping E-book, designed to guide you through every step of the dropshipping and e-commerce journey—from beginner to scaling to 6 or 7 figures. Don’t miss this opportunity to take action and transform your business!</p>
                        <button className='mt-8 primary-btn flex items-center gap-4 btn-shadow'>
                            BUY NOW
                            <FaArrowRight />
                        </button>
                    </div>

                    {/* ============ Image Section =========== */}
                    <div className='w-full md:w-[30%] mt-10 md:mt-0'>
                        <img src={Image} alt="image" className='rounded-lg'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DropShipping;
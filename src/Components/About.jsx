import React from 'react'
import Shipping from '../Assets/shipping.png'
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const features = [
    "Comprehensive Digital Solutions",
    "Proven track record of success",
    "End-to-End Support",
    "Data Driven Insights",
    "Continuous Improvement",
    "Experienced Team",
    "Result Oriented Support"
];

const About = () => {
    return (
        <>
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
                                    <div className='flex items-center text-[17px] lg:text-[19px] text-white gap-2' key={i}><FaCheck className='text-[#7811ff]' />{feature}&nbsp;&nbsp;&nbsp;&nbsp;</div>
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

export default About

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
        <div className='bg-[#290532]'>
            <div className='w-[1200px] mx-auto   py-[3rem] lg:py-[3.5rem]'>
                <div className='mb-10 text-center text-white lg:mb-14'>
                    <h1 className='text-2xl sm:text-3xl lg:text-[2.0rem] font-bold'>ABOUT US</h1>
                </div>
                <div className='flex flex-col items-center gap-10 md:flex-row'>

                    {/* ========== Text Content ========== */}
                    <div className='px-5 text-center md:text-start'>
                        <h1 className='text-2xl font-semibold text-white lg:text-3xl'>Transforming Vision into Reality</h1>
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
                        <button className='flex items-center gap-4 mt-8 primary-btn btn-shadow'>
                            CLAIM YOUR SPOT
                            <FaArrowRight />
                        </button>
                    </div>

                    {/* ========== Image section ========== */}
                    <div className='w-[100%] px-4 md:px-0'>
                        <img src={Shipping} alt="image" className='w-full rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

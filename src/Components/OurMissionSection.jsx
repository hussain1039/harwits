import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl';
import { FaUserGraduate, FaUserClock } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";

const divData = [
    {
        id: 1,
        icon: <SlCalender />,
        title: 'Tracking & Analytics',
        text: 'Detailed performance reports & insights to help you measure results & optimize for continued growth.' 
    },
    {
        id: 2,
        icon: <FaUserGraduate />,
        title: 'Consultation',
        text: 'One-on-one sessions to discuss your business needs, goals, and tailor the best strategies.' 
    },
    {
        id: 3,
        icon: <MdOutlinePriceChange />,
        title: 'Competitive Pricing',
        text: 'Get premium services at the best prices with our competitive strategy.' 
    },
    {
        id: 4,
        icon: <FaUserClock />,
        title: '24/7 Support',
        text: 'Get round-the-clock support from our dedicated team.' 
    },
]

const OurMissionSection = () => {
    return (
        <div className='bg-[#290532]'>
            <div className='w-[1200px]  mx-auto py-[3rem] lg:py-[3.5rem]'>
                <div className='flex flex-col justify-between md:flex-row'>

                    {/* ======== Left Container ======= */}
                    <div className='flex flex-col justify-start items-start gap-4 w-full md:w-[40%] px-4 md:px-0 lg:w-[45%] text-white'>
                        <h1 className='text-2xl md:text-[1.6rem] lg:text-3xl font-bold'>What Else Do You Get ?</h1>
                        <p className='text-[18px] md:text-[16px] lg:text-[18px] mt-4 md:mt-5'>
                            Our mission is to empower businesses with the tools and insights they need to thrive. At HARWITS, we’re more than just an agency—we’re your partner in growth, offering an all-inclusive ecosystem built for success. With 24/7 support, expert brand strategy, personalized consultations, and advanced analytics tracking, we guide you every step of the way. Whether you’re refining your brand or scaling up, HARWITS is here to provide actionable insights and hands-on support, ensuring you reach your goals with confidence.
                        </p>
                        <button className='flex items-center gap-4 mt-8 primary-btn btn-shadow'>
                            MAKE APPOINTMENT
                            <FaArrowRight />
                        </button>
                    </div>

                    {/* ======= Right Container ====== */}
                    <div className='w-full md:w-[50%] px-4 md:px-0 flex flex-wrap gap-8 md:gap-4 lg:gap-8 mt-10 md:mt-0'>
                        {
                            divData.map((data) => {
                                return(
                                    <div 
                                    key={data.id}
                                    className='bg-[#160927] btn-shadow text-center text-white flex flex-col justify-center items-center  w-full md:w-[45%] p-4 rounded-lg'>
                                        <h1 className='text-5xl lg:text-5xl text-[#b47cfd] md:text-4xl'>{data.icon}</h1>
                                        <h1 className='text-[1.3rem] leading-6 mt-3 font-bold'>{data.title}</h1>
                                        <p className='text-[15px] md:text-[13px] lg:text-[15px]'>{data.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMissionSection

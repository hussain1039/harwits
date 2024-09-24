import React from 'react'
import Image from '../Assets/presentation.png';
import { FaFacebookF, FaSnapchatGhost, FaInstagram, FaTiktok } from "react-icons/fa";

const cardData = [
    {
        id: 1,
        title: 'Social Media Marketing',
        text: 'Drive engagement, grow your audience, and boost your brand with social media strategies. We create impactful content and manage campaigns to help you connect with your target audience and achieve results.',
        btn1: 'Facbook Ads',
        btn2: 'Snapchat Ads',
        btn3: 'Instagram Ads',
        btn4: 'Tiktok Ads',
    },
    {
        id: 2,
        title: 'Web Development',
        text: 'Create a powerful online presence with HARWITS. We design and develop custom websites that are not only visually appealing but also functional and user-friendly, to meet your business needs and drive growth.',
        btn1: 'Shopify Website',
        btn2: 'WordPress Site',
        btn3: 'Personal Blog',
        btn4: 'Business Site',
    },
    {
        id: 3,
        title: 'Graphic Designing',
        text: 'Bring your brand to life with stunning visuals. HARWITS creates eye-catching designs that effectively communicate your message and enhance your brand’s identity, from logos and social media graphics to marketing materials.',
        btn1: 'Ui/Ux Design',
        btn2: 'Social Media',
        btn3: 'Thumbnails',
        btn4: 'Portfolio',
    },
    {
        id: 4,
        title: 'Video Editing',
        text: 'Transform your raw footage into polished, professional videos. We handle everything from cutting and splicing to adding effects and transitions, ensuring your content is engaging and visually stunning.',
        btn1: 'Reels Ads',
        btn2: 'YT Videos',
        btn3: 'Shot Vedios',
        btn4: 'Vibes',
    },
    {
        id: 5,
        title: 'Google Ads',
        text: 'Enhance the power of Google Ads to connect with your audience through engaging and targeted campaigns. HARWITS designs creative strategies that capture attention and drive results across these dynamic platforms.',
        btn1: 'Shopping Ads',
        btn2: 'Youtube Ads',
        btn3: 'PPC Compaign',
        btn4: 'Lead Generation',
    },
    {
        id: 6,
        title: 'Social Media Management',
        text: 'Build a stunning, fully functional brand. We handle everything from design and setup to customization and launch, ensuring your social media is optimized for a seamless shopping experience.',
        btn1: 'Branding',
        btn2: 'Acc Handling',
        btn3: 'Acc Growth',
        btn4: 'Posting',
    },
]

const Curriculum = () => {
    return (
        <>
            <div className='w-full bg-[#290532] container py-[3rem] lg:py-[3.5rem]'>
                <div className='text-center text-white mb-20 lg:mb-14'>
                    <h1 className='text-2xl sm:text-3xl lg:text-[2.0rem] font-bold'>What's Included</h1>
                    <p className='text-[16px] lg:text-[19px] mt-4'>Hustlers Ecommerce Curriculum</p>
                </div>
                <div className='px-4 md:px-0 flex flex-col md:flex-row flex-wrap gap-16 lg:gap-28'>
                    {
                        cardData.map((data) => (
                            <div key={data.id} className='bg-[#471f50] p-5 w-full md:w-[45%] flex flex-col items-center justify-center rounded-lg btn-shadow relative'>
                                <img src={Image} alt="image" className='w-[35%]' />
                                <div className='text-white text-center my-5'>
                                    <h1 className='text-[1.5rem] lg:text-[1.7rem] font-bold'>{data.title}</h1>
                                    <p className='text-center text-[16px] lg:text-[18px]'>{data.text}</p>
                                </div>
                                <div className='flex gap-8 lg:gap-16'>
                                    <div className='flex flex-col gap-2'>
                                        <button className='hover:bg-[#7811ff] hover:text-[#fff] transition-all flex items-center gap-1 bg-white py-1 px-2 rounded-lg text-[13px] lg:text-[17px]'><FaFacebookF />{data.btn1}</button>
                                        <button className='hover:bg-[#7811ff] hover:text-[#fff] transition-all flex items-center gap-1 bg-white py-1 px-2 rounded-lg text-[13px] lg:text-[17px]'><FaSnapchatGhost />{data.btn2}</button>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <button className=' hover:bg-[#7811ff] hover:text-[#fff] transition-all flex items-center gap-1 bg-white py-1 px-2 rounded-lg text-[13px] lg:text-[17px]'><FaInstagram />{data.btn3}</button>
                                        <button className='hover:bg-[#7811ff] hover:text-[#fff] transition-all flex items-center gap-1 bg-white py-1 px-2 rounded-lg text-[13px] lg:text-[17px]'><FaTiktok />{data.btn4}</button>
                                    </div>
                                </div>
                                <div className='absolute top-[-25px] left-[-10px] md:left-[-25px] lg:left-[-40px] py-2 px-6 bg-[#7811ff] rounded-full'>
                                    <h1 className='text-white text-[13px] lg:text-[18px] font-semibold'>Service {data.id}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Curriculum

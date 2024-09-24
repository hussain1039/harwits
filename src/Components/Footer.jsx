import React from 'react'
import FooterImg from '../Assets/footer-logo.png'
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail, MdPhoneAndroid } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#160927] py-[3rem] lg:py-[3.5rem]'>
                <div className='container'>
                    <div className='flex justify-between flex-wrap px-4 md:px-0'>
                        <div className='text-white w-full md:w-[40%] lg:w-[30%]'>
                            <div className=''>
                                <img src={FooterImg} alt="footer-logo" className='mb-5' />
                            </div>
                            <div className='flex flex-col gap-2 text-[16px] lg:text-[18px]'>
                                <p className='flex items-center gap-2'><IoIosSend /> Dubai, United Arab Emirates</p>
                                <p className='flex items-center gap-2'><MdOutlineEmail /> info@harwits.com</p>
                                <p className='flex items-center gap-2'><MdPhoneAndroid /> Phone: +971 52 338 4294</p>
                            </div>
                        </div>
                        <div className='text-white w-full md:w-[40%] lg:w-[25%] flex flex-col gap-4 mt-8 md:mt-0'>
                            <h1 className='text-[1.3rem] md:text-2xl font-bold'>INFORMATION</h1>
                            <ul className='text-[#ffffff9c] text-[16px] lg:text-[18px] flex flex-col gap-2'>
                                <li><a href="#">Complaints</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Refund and Returns Policy</a></li>
                                <li><a href="#">Our Sitemap</a></li>
                            </ul>
                        </div>
                        <div className='w-full md:w-[60%] lg:w-[40%] text-white flex flex-col gap-4 mt-8 lg:mt-0'>
                            <h1 className='text-[1.3rem] md:text-2xl font-bold'>OUR NEWSLETTER</h1>
                            <p className='text-[#ffffff9c] text-[16px] flex flex-col gap-2'>Apply for our free membership to receive exclusive deals, news, and events.</p>
                            <div className='flex justify-start items-center gap-4'>
                                <input
                                    type="text"
                                    placeholder='Your Email Address'
                                    className='py-2 px-4 bg-[#3c3c3c] rounded w-[60%] border-[1px] border-white' />
                                <button className='flex items-center gap-4 primary-btn mt-0 text-[18px] font-semibold'>Submit</button>
                            </div>
                            <div className='mt-4 flex gap-3 lg:gap-3'>
                                <div className='bg-[#7811ff] p-2 w-[12%] md:w-[9%] lg:w-[8%] rounded text-2xl'><FaFacebook /></div>
                                <div className='bg-[#7811ff] p-2 w-[12%] md:w-[9%] lg:w-[8%] rounded text-2xl'><FaInstagram /></div>
                                <div className='bg-[#7811ff] p-2 w-[12%] md:w-[9%] lg:w-[8%] rounded text-2xl'><FaTiktok /></div>
                                <div className='bg-[#7811ff] p-2 w-[12%] md:w-[9%] lg:w-[8%] rounded text-2xl'><FaWhatsapp /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-10 mb-4' />
                <div className='container text-[19px] text-white'>
                    Custom Web Design By <a href="#" className='font-semibold hover:text-[#530caa] transition-all'>Harwits</a>
                </div>
            </div>
        </>
    )
}

export default Footer;
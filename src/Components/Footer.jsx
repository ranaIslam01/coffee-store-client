import React from 'react';
import footerBg from '../assets/images/more/footerBg.jpg';
import logo from '../assets/images/more/logo1.png';
import subFooter from '../assets/images/more/subFooter.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='pt-30.25' style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='pb-12 px-[15%] grid lg:grid-cols-5 gap-8'>
                {/* Left Section */}
                <div className='col-span-3'>
                    <img className='h-18' src={logo} alt="Logo" />
                    <h1 className='mt-2 text-[56px] text-[#331A15] my-text rancho'>Espresso Emporium</h1>
                    <p className='text-xl text-[#1B1A1A] mt-6'>
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                    </p>
                    <div className='flex items-center my-6 gap-5 text-3xl text-[#331A15]'>
                        <FaFacebook className='cursor-pointer' />
                        <FaInstagram className='cursor-pointer' />
                        <FaTwitter className='cursor-pointer' />
                        <FaLinkedin className='cursor-pointer' />
                    </div>

                    <div className='mt-6'>
                        <h1 className='text-[#331A15] rancho my-text text-[56px]'>Get in Touch</h1>
                        <div className='flex gap-3 mt-7 items-center'>
                            <FaPhoneAlt className='text-2xl text-[#331A15]' />
                            <p className='text-xl text-[#1B1A1A] hover:underline cursor-pointer'>+88 01533 333 333</p>
                        </div>
                        <div className='flex mt-4 items-center gap-3'>
                            <IoIosMail className='text-2xl text-[#331A15]' />
                            <p className='text-xl text-[#1B1A1A] hover:underline cursor-pointer'>info@gmail.com</p>
                        </div>
                        <div className='flex mt-4 items-center gap-3'>
                            <FaLocationDot className='text-2xl text-[#331A15]' />
                            <p className='text-xl cursor-pointer text-[#1B1A1A] hover:underline'>
                                72, Wall street, King Road, Dhaka
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className='col-span-2'>
                    <h1 className='text-[56px] text-[#331A15] rancho my-text'>Contact with Us</h1>
                    <form className='flex flex-col gap-4 mt-8'>
                        <input className='py-3 px-5 bg-white outline-none rounded-lg' type="text" placeholder='Name' />
                        <input className='py-3 px-5 bg-white outline-none rounded-lg' type="email" name="email" placeholder='Email' />
                        <textarea className='py-3 px-5 bg-white outline-none rounded-lg' placeholder='Message' rows={5} cols={5}></textarea>
                        <button className='text-[#331A15] mt-2 border border-[#331A15] rancho px-10 py-3 rounded-[30px] cursor-pointer text-xl hover:text-white my-text duration-500 hover:bg-[#331A15] ' type='button'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Sub Footer */}
            <div style={{ backgroundImage: `url(${subFooter})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-xl py-4 text-center rancho text-white'>
                    © Espresso Emporium ! All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import coffeeBg from '../assets/images/more/coffeeBg.png';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='pt-18'>
            <div className='lg:px-[15%] py-12.5' style={{ backgroundImage: `url(${coffeeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                
                {/* Back Button */}
                <button className='flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer'>
                    <IoMdArrowBack className='text-xl' />
                    <Link to="/" className='text-xl rancho text-[#374151] my-text'>Back To Home</Link>
                </button>

                {/* SignUp Form */}
                <div className='px-10 w-2/3 mx-auto py-17.5 bg-[#F4F3F0] mt-8 rounded-2xl'>
                    <h1 className='text-center text-[56px] text-[#374151] my-text rancho'>Sign Up Now!</h1>
                    <form className='flex flex-col gap-6 mt-6'>
                        <div className='grid grid-cols-1 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold my-text rancho text-lg text-[#1B1A1ACC]'>Name</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" required name="name" placeholder='Enter Your Name' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold my-text rancho text-lg text-[#1B1A1ACC]'>Address</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" required name="address" placeholder='Enter Your Address' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold my-text rancho text-lg text-[#1B1A1ACC]'>Phone Number</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" required name="number" placeholder='Enter Your Phone Number' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold my-text rancho text-lg text-[#1B1A1ACC]'>Email</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="email" required name="email" placeholder='Enter Your Email' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold my-text rancho text-lg text-[#1B1A1ACC]'>Password</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="password" required name="password" placeholder='Enter Your Password' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <label className='font-semibold text-lg rancho my-text text-[#1B1A1ACC]'>Photo URL</label>
                            <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="photo" required placeholder='Enter Photo URL' />
                        </div>
                        <button type='button' className='text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-3 rounded-lg bg-[#D2B48C] cursor-pointer'>
                            Sign Up
                        </button>

                        <h3 className='text-center font-medium mt-4'>
                            You already have an account?{' '}
                            <Link to='/signin'>
                                <span className='rancho my-text cursor-pointer hover:underline'>Sign In</span>
                            </Link>
                        </h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
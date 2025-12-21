import React from 'react';
import coffeeBg from '../assets/images/more/coffeeBg.png';
import { IoMdArrowBack } from "react-icons/io";

const AddCoffee = () => {
    return (
        <div className='pt-18'>
            <div
                className='px-[15%] py-12.5'
                style={{ background: `url(${coffeeBg})` }}
            >
                {/* Back Button UI only */}
                <button
                    className='flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer'
                >
                    <IoMdArrowBack className='text-xl' />
                    <p className='text-xl rancho text-[#374151] my-text'>
                        Back To Home
                    </p>
                </button>

                {/* Form Container */}
                <div className='px-28 py-17.5 bg-[#F4F3F0] mt-8 rounded-2xl'>
                    <h1 className='text-center text-[56px] text-[#374151] my-text rancho'>
                        Add New Coffee
                    </h1>

                    <p className='text-lg text-[#1B1A1AB3] my-8 text-center mx-[7%]'>
                        It is a long established fact that a reader will be distraceted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters.
                    </p>

                    {/* UI Form (no submit logic) */}
                    <form className='flex flex-col gap-6'>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>
                                    Name
                                </label>
                                <input
                                    className='py-3 px-3 bg-white rounded-lg w-full outline-none'
                                    type="text"
                                    placeholder='Enter Coffee Name'
                                />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>
                                    Quantity
                                </label>
                                <input
                                    className='py-3 px-3 bg-white rounded-lg w-full outline-none'
                                    type="text"
                                    placeholder='Enter coffee Quantity'
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>
                                    Supplier
                                </label>
                                <input
                                    className='py-3 px-3 bg-white rounded-lg w-full outline-none'
                                    type="text"
                                    placeholder='Enter coffee Supplier'
                                />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>
                                    Taste
                                </label>
                                <input
                                    className='py-3 px-3 bg-white rounded-lg w-full outline-none'
                                    type="text"
                                    placeholder='Enter coffee taste'
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>
                                    Price
                                </label>
                                <input
                                    className='py-3 px-3 bg-white rounded-lg w-full outline-none'
                                    type="text"
                                    placeholder='Enter coffee Price'
                                />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>
                                    Details
                                </label>
                                <input
                                    className='py-3 px-3 bg-white rounded-lg w-full outline-none'
                                    type="text"
                                    placeholder='Enter coffee details'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <label className='font-semibold text-xl text-[#1B1A1ACC]'>
                                Photo URL
                            </label>
                            <input
                                className='py-3 px-3 bg-white rounded-lg w-full outline-none'
                                type="text"
                                placeholder='Enter Photo URL'
                            />
                        </div>

                        {/* Button UI only */}
                        <button
                            type='button'
                            className='text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-3 rounded-lg bg-[#D2B48C] cursor-pointer'
                        >
                            Add Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;

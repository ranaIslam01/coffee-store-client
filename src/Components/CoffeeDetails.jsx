import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import coffeeBg from '../assets/images/more/coffeeBg.png'
import { IoMdArrowBack } from 'react-icons/io';

const CoffeeDetails = () => {
    const navigate = useNavigate();

    const coffee = useLoaderData();
    console.log(coffee);
    const {photo, name, details, price, quantity, supplier, taste} = coffee;
    return (
        <div className='pt-26'>
            <div className='px-[15%] py-12.5' style={{background: `url(${coffeeBg})`}}>
                <button onClick={() => navigate(-1)}  className='flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer'>
                    <IoMdArrowBack className='text-xl'></IoMdArrowBack>
                    <p className='text-xl rancho text-[#374151] my-text '>Back To Home</p>
                </button>
                <div className='bg-[#F4F3F0] flex items-center gap-20 mt-8 py-17.5 px-[10%]'>
                    <img className='h-100 w-auto' src={photo} alt="" />
                    <div>
                        <h1 className='text-5xl text-[#331A15] my-text rancho'>Niceties</h1>
                        <div className='mt-8 flex flex-col gap-3'>
                            <p className='text-lg font-semibold text-[#1B1A1A]'>Name : <span className='text-base text-[#5C5B5B] font-normal'>{name}</span></p>

                            <p className='text-lg font-semibold text-[#1B1A1A]'>Supplier : <span className='text-base text-[#5C5B5B] font-normal'>{supplier}</span></p>

                            <p className='text-lg font-semibold text-[#1B1A1A]'>Details : <span className='text-base text-[#5C5B5B] font-normal'>{details}</span></p>

                            <p className='text-lg font-semibold text-[#1B1A1A]'>Quantity : <span className='text-base text-[#5C5B5B] font-normal'>{quantity}</span></p>

                            <p className='text-lg font-semibold text-[#1B1A1A]'>Price : <span className='text-base text-[#5C5B5B] font-normal'>{price}</span></p>

                            <p className='text-lg font-semibold text-[#1B1A1A]'>Taste : <span className='text-base text-[#5C5B5B] font-normal'>{taste}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
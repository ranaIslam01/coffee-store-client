import React from 'react';
import coffeeBg from '../assets/images/more/coffeeBg.png';
import { IoMdArrowBack } from 'react-icons/io';

const CoffeeDetails = () => {
    // Static dummy coffee data
    const coffee = {
        photo: "https://via.placeholder.com/400x400",
        name: "Niceties",
        details: "Rich and aromatic coffee with smooth taste.",
        price: "$5",
        quantity: "50",
        supplier: "Coffee Supplier",
        taste: "Bold & Smooth"
    };

    return (
        <div className='pt-26'>
            <div className='px-[15%] py-12.5' style={{ background: `url(${coffeeBg})` }}>
                {/* Back Button UI only */}
                <button className='flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer'>
                    <IoMdArrowBack className='text-xl' />
                    <p className='text-xl rancho text-[#374151] my-text'>Back To Home</p>
                </button>

                {/* Coffee Details */}
                <div className='bg-[#F4F3F0] flex flex-col lg:flex-row items-center gap-20 mt-8 py-17.5 px-[10%]'>
                    <img className='h-100 w-auto' src={coffee.photo} alt={coffee.name} />
                    <div>
                        <h1 className='text-5xl text-[#331A15] my-text rancho'>{coffee.name}</h1>
                        <div className='mt-8 flex flex-col gap-3'>
                            <p className='text-lg font-semibold text-[#1B1A1A]'>
                                Name: <span className='text-base text-[#5C5B5B] font-normal'>{coffee.name}</span>
                            </p>
                            <p className='text-lg font-semibold text-[#1B1A1A]'>
                                Supplier: <span className='text-base text-[#5C5B5B] font-normal'>{coffee.supplier}</span>
                            </p>
                            <p className='text-lg font-semibold text-[#1B1A1A]'>
                                Details: <span className='text-base text-[#5C5B5B] font-normal'>{coffee.details}</span>
                            </p>
                            <p className='text-lg font-semibold text-[#1B1A1A]'>
                                Quantity: <span className='text-base text-[#5C5B5B] font-normal'>{coffee.quantity}</span>
                            </p>
                            <p className='text-lg font-semibold text-[#1B1A1A]'>
                                Price: <span className='text-base text-[#5C5B5B] font-normal'>{coffee.price}</span>
                            </p>
                            <p className='text-lg font-semibold text-[#1B1A1A]'>
                                Taste: <span className='text-base text-[#5C5B5B] font-normal'>{coffee.taste}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
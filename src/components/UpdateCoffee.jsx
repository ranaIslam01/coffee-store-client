import React from 'react';
import coffeeBg from '../assets/images/more/coffeeBg.png'
import { useLoaderData, useNavigate } from 'react-router';
import { IoMdArrowBack } from 'react-icons/io';
import Swal from 'sweetalert2';


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    console.log(coffee);
    const {name, photo, price, taste, supplier, details, quantity, _id} = coffee;

    const handelUpdateCoffee = (e) =>{
        e.preventDefault();
        const from = e.target;
        const fromData = new FormData(from);
        const updateCoffee = Object.fromEntries(fromData.entries());
        console.log(updateCoffee);

        // send update coffee to the database

        fetch(`https://coffee-store-server-one-psi.vercel.app/coffees/${_id}`,{
            method : 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Coffee Update Successful",
                    showConfirmButton: false,
                    timer: 1500
                    });
            }
        })
    }

    const navigate = useNavigate();
    return (
        <div className='pt-18'>
            <div className='px-[15%] py-[50px]' style={{background: `url(${coffeeBg})`}}>
                <button onClick={() => navigate(-1)}  className='flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer'>
                    <IoMdArrowBack className='text-xl'></IoMdArrowBack>
                    <p className='text-xl rancho text-[#374151] my-text '>Back To Home</p>
                </button>
                <div className='lg:px-28 px-10 py-[70px] bg-[#F4F3F0] mt-8 rounded-2xl'>
                    <h1 className='text-center text-[56px] text-[#374151] my-text rancho'>Update Existing Coffee Details</h1>
                    <p className='text-lg text-[#1B1A1AB3] my-8 text-center mx-[7%]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handelUpdateCoffee} className='flex flex-col gap-6'>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>Name</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="name" defaultValue={name} placeholder='Enter Coffee Name' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>Quantity</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="quantity" defaultValue={quantity} placeholder='Enter coffee Quantity' />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>Supplier</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="supplier" defaultValue={supplier} placeholder='Enter coffee Supplier' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>Taste</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="taste" defaultValue={taste} placeholder='Enter coffee taste' />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>Price</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="price" defaultValue={price} placeholder='Enter coffee Price' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-semibold text-xl text-[#1B1A1ACC]'>Details</label>
                                <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="details" defaultValue={details} placeholder='Enter coffee details' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <label className='font-semibold text-xl text-[#1B1A1ACC]'>Photo URl</label>
                            <input className='py-3 px-3 bg-white rounded-lg w-full outline-none' type="text" name="photo" defaultValue={photo} placeholder='Enter Photo URL' />
                        </div>
                        <button type='submit' className='text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-3 rounded-lg bg-[#D2B48C] cursor-pointer'>Update Coffee Details</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;
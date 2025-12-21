import React from 'react';
import errorImage from '../assets/images/404/404.gif'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex  justify-center items-center h-screen '>
            <img className='object-cover w-2/3' src={errorImage} alt="Not Found" />
            <div className='absolute top-[40%]'>
                <button onClick={() => navigate('/')} className='flex items-center gap-1 py-3 px-5 hover:bg-[#D2B48C] duration-500 rounded-xl rancho'>
                    <IoMdArrowBack className='text-2xl'></IoMdArrowBack>
                    <p className='text-[#331A15] text-xl my-text '>Back To Home</p>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
import React from 'react';
import image1 from '../assets/images/cups/Rectangle 9.png'
import image2 from '../assets/images/cups/Rectangle 10.png'
import image3 from '../assets/images/cups/Rectangle 11.png'
import image4 from '../assets/images/cups/Rectangle 12.png'
import image5 from '../assets/images/cups/Rectangle 13.png'
import image6 from '../assets/images/cups/Rectangle 14.png'
import image7 from '../assets/images/cups/Rectangle 15.png'
import image8 from '../assets/images/cups/Rectangle 16.png'


const InstagramImage = () => {
    return (
        <div className='px-[15%] mb-28'>
            <p className='text-center text-xl text-[#1B1A1A]'>Follow Us Now</p>
            <h1 className='mt-2 text-[56px] rancho my-text text-center'>Follow on Instagram</h1>
            <div className='grid md:grid-cols-2 gird-cols-1 lg:grid-cols-4 mt-10 gap-6'>
                <img className='w-full' src={image1} alt="" />
                <img className='w-full' src={image2} alt="" />
                <img className='w-full' src={image3} alt="" />
                <img className='w-full' src={image4} alt="" />
                <img className='w-full' src={image5} alt="" />
                <img className='w-full' src={image6} alt="" />
                <img className='w-full' src={image7} alt="" />
                <img className='w-full' src={image8} alt="" />
            </div>
        </div>
    );
};

export default InstagramImage;
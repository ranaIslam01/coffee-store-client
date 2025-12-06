import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import cardBg from '../assets/images/more/cards.png';
import { CiCoffeeCup } from "react-icons/ci";
import CoffeeCard from './CoffeeCard';
import InstagramImage from './InstagramImage';
import Hero from './Hero';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(
        Array.isArray(initialCoffees) ? initialCoffees : []
    );

    const navigate = useNavigate();

    return (
        <>
            <div>
                <Hero />
            </div>

            <div
                className="py-[120px] px-[15%]"
                style={{
                    background: `url(${cardBg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <p className="text-xl text-center text-[#1B1A1A]">--- Sip & Savor ---</p>
                <h1 className="text-center text-[56px] mt-2 rancho my-text text-[#331A15]">
                    Our Popular Products
                </h1>

                <div className="flex justify-center items-center">
                    <button
                        onClick={() => navigate('/addCoffee')}
                        className="flex items-center py-3 px-5 border-2 border-[#331A15] rounded-lg cursor-pointer bg-[#E3B577]"
                    >
                        <p className="text-xl rancho my-text">Add Coffee</p>
                        <CiCoffeeCup className="text-2xl" />
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mt-12">
                    {Array.isArray(coffees) &&
                        coffees.map((coffee, idx) => (
                            <CoffeeCard
                                key={idx}
                                coffee={coffee}
                                coffees={coffees}
                                setCoffees={setCoffees}
                            />
                        ))}
                </div>
            </div>

            <div>
                <InstagramImage />
            </div>
        </>
    );
};

export default Home;

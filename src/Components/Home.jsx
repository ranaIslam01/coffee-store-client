import React from 'react';
import cardBg from '../assets/images/more/cards.png';
import { CiCoffeeCup } from "react-icons/ci";
import CoffeeCard from './CoffeeCard';
// import InstagramImage from './InstagramImage';
import Hero from './Hero';

const Home = () => {
    // Static dummy coffees for UI
    const coffees = [
        {
            name: "Espresso",
            price: "$5",
            photo: "https://via.placeholder.com/100",
            quantity: "50",
            supplier: "Coffee Supplier"
        },
        {
            name: "Cappuccino",
            price: "$6",
            photo: "https://via.placeholder.com/100",
            quantity: "30",
            supplier: "Coffee Supplier"
        }
    ];

    return (
        <>
            <div>
                <Hero />
            </div>

            <div
                className="py-30 px-[15%]"
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

                {/* Add Coffee Button UI only */}
                <div className="flex justify-center items-center">
                    <button
                        className="flex items-center py-3 px-5 border-2 border-[#331A15] rounded-lg cursor-pointer bg-[#E3B577]"
                    >
                        <p className="text-xl rancho my-text">Add Coffee</p>
                        <CiCoffeeCup className="text-2xl" />
                    </button>
                </div>

                {/* Coffee Cards */}
                <div className="grid lg:grid-cols-2 gap-6 mt-12">
                    {coffees.map((coffee, idx) => (
                        <CoffeeCard key={idx} coffee={coffee} />
                    ))}
                </div>
            </div>

            <div>
                {/* <InstagramImage /> */}
            </div>
        </>
    );
};

export default Home;

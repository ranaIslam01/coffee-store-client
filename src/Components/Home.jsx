import React, {useState } from "react";
import cardBg from "../assets/images/more/cards.png";
import { CiCoffeeCup } from "react-icons/ci";
import CoffeeCard from "./CoffeeCard";
import InstagramImage from "./InstagramImage";
import Hero from "./Hero";
import { Link, useLoaderData } from "react-router";
import Contuct from "./Contuct";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <>
      <div>
        <Hero />
      </div>

      <div
        className="py-12 px-4 sm:px-6 md:px-[15%]"
        style={{
          background: `url(${cardBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <p className="text-xl text-center text-[#1B1A1A]">
          --- Sip & Savor ---
        </p>
        <h1 className="text-center text-2xl md:text-[56px] mt-2 rancho my-text text-[#331A15]">
          Our Popular Products
        </h1>

        {/* Add Coffee Button UI only */}
        <div className="flex justify-center items-center">
          <button className="flex items-center mt-4 py-3 px-5 border-2 border-[#331A15] rounded-lg cursor-pointer bg-[#E3B577]">
            <Link to="/addCoffee">
              <p className="text-xl rancho my-text">Add Coffee</p>
            </Link>
            <CiCoffeeCup className="text-2xl" />
          </button>
        </div>

        {/* Coffee Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {coffees?.map((coffee, idx) => (
            <CoffeeCard
              key={idx}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            />
          ))}
        </div>
      </div>

      <div>
        <InstagramImage />
      </div>
      <div>
        <Contuct />
      </div>
    </>
  );
};

export default Home;

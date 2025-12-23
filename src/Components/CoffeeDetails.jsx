import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import coffeeBg from "../assets/images/more/coffeeBg.png";
import { IoMdArrowBack } from "react-icons/io";

const CoffeeDetails = () => {
  const navigate = useNavigate();

  const coffee = useLoaderData();
  const { photo, name, details, price, quantity, supplier, taste } = coffee;
  return (
    <div className="pt-10">
      <div
        className="px-4 sm:px-6 md:px-[10%] lg:px-[15%] py-8 md:py-12.5"
        style={{ background: `url(${coffeeBg})` }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer"
        >
          <IoMdArrowBack className="text-xl"></IoMdArrowBack>
          <p className="text-sm md:text-xl rancho text-[#374151] my-text ">
            Back To Home
          </p>
        </button>
        <div className="bg-[#F4F3F0] flex flex-col md:flex-row items-center gap-8 md:gap-20 mt-8 pb-8 md:pb-17.5 pt-0 px-4 sm:px-6 md:px-[5%] lg:px-[10%]">
          <img
            className="h-32 sm:h-60 md:h-100 w-auto object-cover"
            src={photo}
            alt=""
          />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#331A15] my-text rancho">
              Niceties
            </h1>
            <div className="mt-4 md:mt-8 flex flex-col gap-2 md:gap-3">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#1B1A1A]">
                Name :{" "}
                <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
                  {name}
                </span>
              </p>

              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#1B1A1A]">
                Supplier :{" "}
                <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
                  {supplier}
                </span>
              </p>

              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#1B1A1A]">
                Details :{" "}
                <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
                  {details}
                </span>
              </p>

              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#1B1A1A]">
                Quantity :{" "}
                <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
                  {quantity}
                </span>
              </p>

              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#1B1A1A]">
                Price :{" "}
                <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
                  {price}
                </span>
              </p>

              <p className="text-sm sm:text-base md:text-lg font-semibold text-[#1B1A1A]">
                Taste :{" "}
                <span className="text-xs sm:text-sm md:text-base text-[#5C5B5B] font-normal">
                  {taste}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

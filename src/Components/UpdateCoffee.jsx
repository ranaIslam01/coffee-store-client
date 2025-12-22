import React from "react";
import coffeeBg from "../assets/images/more/coffeeBg.png";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router";

const UpdateCoffee = () => {
  // Static placeholder data
  const coffee = {
    name: "Cappuccino",
    quantity: "20",
    supplier: "Coffee Supplier",
    taste: "Rich & Bold",
    price: "$5",
    details: "Smooth and aromatic",
    photo: "https://via.placeholder.com/150",
  };

  const { name, photo, price, taste, supplier, details, quantity } = coffee;

  return (
    <div className="pt-18">
      <div
        className="px-4 sm:px-6 md:px-[15%] py-12.5"
        style={{
          backgroundImage: `url(${coffeeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Back Button */}
        <Link to="/">
          <button className="flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer">
            <IoMdArrowBack className="text-xl" />
            <p className="text-xl rancho text-[#374151] my-text">
              Back To Home
            </p>
          </button>
        </Link>

        {/* Update Coffee Form */}
        <div className="px-6 lg:px-28 py-8 lg:py-17.5 bg-[#F4F3F0] mt-8 rounded-2xl">
          <h1 className="text-center text-2xl lg:text-[56px] text-[#374151] my-text rancho">
            Update Existing Coffee Details
          </h1>
          <p className="text-lg text-[#1B1A1AB3] my-8 text-center mx-[7%]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl text-[#1B1A1ACC]">
                  Name
                </label>
                <input
                  className="py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={name}
                  placeholder="Enter Coffee Name"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl text-[#1B1A1ACC]">
                  Quantity
                </label>
                <input
                  className="py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={quantity}
                  placeholder="Enter Coffee Quantity"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl text-[#1B1A1ACC]">
                  Supplier
                </label>
                <input
                  className="py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={supplier}
                  placeholder="Enter Coffee Supplier"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl text-[#1B1A1ACC]">
                  Taste
                </label>
                <input
                  className="py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={taste}
                  placeholder="Enter Coffee Taste"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl text-[#1B1A1ACC]">
                  Price
                </label>
                <input
                  className="py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={price}
                  placeholder="Enter Coffee Price"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl text-[#1B1A1ACC]">
                  Details
                </label>
                <input
                  className="py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={details}
                  placeholder="Enter Coffee Details"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-semibold text-xl text-[#1B1A1ACC]">
                Photo URL
              </label>
              <input
                className="py-3 px-3 bg-white rounded-lg w-full outline-none"
                type="text"
                defaultValue={photo}
                placeholder="Enter Photo URL"
              />
            </div>

            <button
              type="button"
              className="text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-3 rounded-lg bg-[#D2B48C] cursor-pointer"
            >
              Update Coffee Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;

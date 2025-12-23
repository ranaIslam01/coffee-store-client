import React from "react";
import coffeeBg from "../assets/images/more/coffeeBg.png";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, photo, price, taste, supplier, details, quantity } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    //  send updated coffee

    fetch(`https://coffee-store-server-1-t0pq.onrender.com/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1400,
          });
        }
      });
  };

  return (
    <div className="pt-6">
      <div
        className="px-4 sm:px-6 md:px-[10%] lg:px-[15%] py-8 md:py-12.5"
        style={{
          backgroundImage: `url(${coffeeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Back Button */}
        <Link to="/">
          <button className="flex gap-3 items-center px-5 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer">
            <IoMdArrowBack className="text-xl" />
            <p className="text-sm md:text-xl rancho text-[#374151] my-text">
              Back To Home
            </p>
          </button>
        </Link>

        {/* Update Coffee Form */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-28 py-8 lg:pb-10 lg:pt-0 bg-[#F4F3F0] mt-8 rounded-2xl">
          <h1 className="text-center text-2xl sm:text-3xl md:text-[56px] text-[#374151] my-text rancho">
            Update Existing Coffee Details
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#1B1A1AB3] my-6 md:my-8 text-center px-0 md:px-[7%]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <form
            onSubmit={handleUpdateCoffee}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Name
                </label>
                <input
                  name="name"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={name}
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Quantity
                </label>
                <input
                  name="quantity"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={quantity}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Supplier
                </label>
                <input
                  name="supplier"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={supplier}
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Taste
                </label>
                <input
                  name="taste"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={taste}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Price
                </label>
                <input
                  name="price"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={price}
                />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Details
                </label>
                <input
                  name="details"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none"
                  type="text"
                  defaultValue={details}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                Photo URL
              </label>
              <input
                name="photo"
                className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none"
                type="text"
                defaultValue={photo}
              />
            </div>

            <button
              type="submit"
              className="text-base md:text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-2 md:py-3 rounded-lg bg-[#D2B48C] cursor-pointer hover:bg-[#c9a876] duration-300"
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

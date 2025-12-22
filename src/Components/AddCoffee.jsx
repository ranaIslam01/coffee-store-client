import React from "react";
import coffeeBg from "../assets/images/more/coffeeBg.png";
import { IoMdArrowBack } from "react-icons/io";
import Swal from "sweetalert2";
import { Link } from "react-router";

const AddCoffee = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    // send coffee data to the db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added successfully");
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
          //   form.reset();
        }
      });
  };

  return (
    <div className="pt-6">
      <div
        className="px-4 sm:px-6 md:px-[10%] lg:px-[15%] py-8 md:py-12.5"
        style={{ background: `url(${coffeeBg})` }}
      >
        {/* Back Button UI only */}

        <Link to="/">
          <button className="flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer">
            <IoMdArrowBack className="text-xl" />
            <p className="text-sm md:text-xl rancho text-[#374151] my-text">
              Back To Home
            </p>
          </button>
        </Link>

        {/* Form Container */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-28 py-8 md:pb-17.5 md:pt-0 bg-[#F4F3F0] mt-8 rounded-2xl">
          <h1 className="text-center text-2xl sm:text-3xl md:text-[56px] text-[#374151] my-text rancho">
            Add New Coffee
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#1B1A1AB3] my-6 md:my-8 text-center px-0 md:px-[7%]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>

          {/* UI Form (no submit logic) */}
          <form
            onSubmit={handlesubmit}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Name
                </label>
                <input
                  name="name"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="text"
                  placeholder="Enter Coffee Name"
                />
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Quantity
                </label>
                <input
                  name="quantity"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="text"
                  placeholder="Enter coffee Quantity"
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
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="text"
                  placeholder="Enter coffee Supplier"
                />
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Taste
                </label>
                <input
                  name="taste"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="text"
                  placeholder="Enter coffee taste"
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
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="number"
                  placeholder="Enter coffee Price"
                />
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                  Details
                </label>
                <input
                  name="details"
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="text"
                  placeholder="Enter coffee details"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <label className="font-semibold text-base md:text-xl text-[#1B1A1ACC]">
                Photo URL
              </label>
              <input
                name="photo"
                className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                type="text"
                placeholder="Enter Photo URL"
              />
            </div>

            {/* Button UI only */}
            <button
              type="submit"
              className="text-base md:text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-2 md:py-3 rounded-lg bg-[#D2B48C] cursor-pointer hover:bg-[#c9a876] duration-300"
            >
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;

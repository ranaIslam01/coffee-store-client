import React from "react";
import coffeeBg from "../assets/images/more/coffeeBg.png";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="pt-10 md:pt-18">
      <div
        className="px-4 sm:px-6 md:px-[10%] lg:px-[15%] py-8 md:py-12.5"
        style={{
          backgroundImage: `url(${coffeeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Back Button UI only */}
        <button className="flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer">
          <IoMdArrowBack className="text-xl" />
          <Link
            to="/"
            className="text-sm md:text-xl rancho text-[#374151] my-text"
          >
            Back To Home
          </Link>
        </button>

        {/* SignIn Form */}
        <div className="px-4 sm:px-6 md:px-10 w-full sm:w-5/6 md:w-2/3 mx-auto py-8 md:py-17.5 bg-[#F4F3F0] mt-8 rounded-2xl">
          <h1 className="text-center text-2xl sm:text-4xl md:text-[56px] text-[#374151] my-text rancho">
            Sign in Now!
          </h1>
          <form className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6">
            <div className="flex flex-col gap-2 md:gap-4">
              <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                Email
              </label>
              <input
                required
                className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                type="text"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                Password
              </label>
              <input
                required
                className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
            </div>
            <button
              type="button"
              className="text-base md:text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-2 md:py-3 rounded-lg bg-[#D2B48C] cursor-pointer hover:bg-[#c9a876] duration-300"
            >
              Sign in
            </button>

            <h3 className="text-center font-medium mt-2 md:mt-4 text-sm md:text-base">
              You don't have an account?{" "}
              <Link to="/signup">
                <span className="rancho my-text cursor-pointer hover:underline">
                  Sign Up
                </span>
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useContext } from "react";
import coffeeBg from "../assets/images/more/coffeeBg.png";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const hendleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFromData } = Object.fromEntries(
      formData.entries()
    );

    //create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result);

        const userProfile = {
          email,
          ...restFromData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,

        };

        //save profile info in the db

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after profile save", data);
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        {/* Back Button */}
        <button className="flex gap-3 items-center px-5 py-3 rounded-xl hover:bg-[#E3B577] duration-500 cursor-pointer">
          <IoMdArrowBack className="text-xl" />
          <Link
            to="/"
            className="text-sm md:text-xl rancho text-[#374151] my-text"
          >
            Back To Home
          </Link>
        </button>

        {/* SignUp Form */}
        <div className="px-4 sm:px-6 md:px-10 w-full sm:w-5/6 md:w-2/3 mx-auto py-8 md:py-17.5 bg-[#F4F3F0] mt-8 rounded-2xl">
          <h1 className="text-center text-2xl sm:text-4xl md:text-[56px] text-[#374151] my-text rancho">
            Sign Up Now!
          </h1>
          <form
            onSubmit={hendleSignUp}
            className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6"
          >
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-4">
                <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                  Name
                </label>
                <input
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="text"
                  required
                  name="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                  Address
                </label>
                <input
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="text"
                  required
                  name="address"
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                  Phone Number
                </label>
                <input
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="text"
                  required
                  name="number"
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                  Email
                </label>
                <input
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="email"
                  required
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <label className="font-semibold my-text rancho text-sm md:text-lg text-[#1B1A1ACC]">
                  Password
                </label>
                <input
                  className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                  type="password"
                  required
                  name="password"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <label className="font-semibold text-sm md:text-lg rancho my-text text-[#1B1A1ACC]">
                Photo URL
              </label>
              <input
                className="py-2 md:py-3 px-3 bg-white rounded-lg w-full outline-none text-sm md:text-base"
                type="text"
                name="photo"
                required
                placeholder="Enter Photo URL"
              />
            </div>
            <button
              type="submit"
              className="text-base md:text-xl text-[#331A15] my-text border-2 border-[#331A15] rancho w-full py-2 md:py-3 rounded-lg bg-[#D2B48C] cursor-pointer hover:bg-[#c9a876] duration-300"
            >
              Sign Up
            </button>

            <h3 className="text-center font-medium mt-2 md:mt-4 text-sm md:text-base">
              You already have an account?{" "}
              <Link to="/signin">
                <span className="rancho my-text cursor-pointer hover:underline">
                  Sign In
                </span>
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

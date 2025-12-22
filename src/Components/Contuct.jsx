import React from "react";
import footerBg from "../assets/images/more/footerBg.jpg";
import logo from "../assets/images/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contuct = () => {
  return (
    <section
      className="py-8 md:py-10"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pb-8 md:pb-12 px-4 sm:px-6 md:px-[10%] lg:px-[15%] grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
        {/* Left Section */}
        <div className="lg:col-span-3">
          <img className="h-12 sm:h-16 md:h-18" src={logo} alt="Logo" />
          <h1 className="mt-2 text-2xl sm:text-4xl md:text-[56px] text-[#331A15] my-text rancho">
            Espresso Emporium
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-[#1B1A1A] mt-4 md:mt-6">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex items-center my-4 md:my-6 gap-4 md:gap-5 text-2xl md:text-3xl text-[#331A15]">
            <FaFacebook className="cursor-pointer hover:text-[#E3B577] duration-300" />
            <FaInstagram className="cursor-pointer hover:text-[#E3B577] duration-300" />
            <FaTwitter className="cursor-pointer hover:text-[#E3B577] duration-300" />
            <FaLinkedin className="cursor-pointer hover:text-[#E3B577] duration-300" />
          </div>

          <div className="mt-6 md:mt-8">
            <h1 className="text-[#331A15] rancho my-text text-2xl sm:text-4xl md:text-[56px]">
              Get in Touch
            </h1>
            <div className="flex gap-3 mt-4 md:mt-7 items-start md:items-center">
              <FaPhoneAlt className="text-lg md:text-2xl text-[#331A15] flex-shrink-0 mt-1 md:mt-0" />
              <p className="text-sm sm:text-base md:text-xl text-[#1B1A1A] hover:underline cursor-pointer">
                +88 01533 333 333
              </p>
            </div>
            <div className="flex mt-3 md:mt-4 items-start md:items-center gap-3">
              <IoIosMail className="text-lg md:text-2xl text-[#331A15] flex-shrink-0 mt-1 md:mt-0" />
              <p className="text-sm sm:text-base md:text-xl text-[#1B1A1A] hover:underline cursor-pointer break-all">
                info@gmail.com
              </p>
            </div>
            <div className="flex mt-3 md:mt-4 items-start md:items-center gap-3">
              <FaLocationDot className="text-lg md:text-2xl text-[#331A15] flex-shrink-0 mt-1 md:mt-0" />
              <p className="text-sm sm:text-base md:text-xl cursor-pointer text-[#1B1A1A] hover:underline">
                72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-4xl md:text-[56px] text-[#331A15] rancho my-text">
            Contact with Us
          </h1>
          <form className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-8">
            <input
              className="py-2 md:py-3 px-4 md:px-5 bg-white outline-none rounded-lg text-sm md:text-base"
              type="text"
              placeholder="Name"
            />
            <input
              className="py-2 md:py-3 px-4 md:px-5 bg-white outline-none rounded-lg text-sm md:text-base"
              type="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="py-2 md:py-3 px-4 md:px-5 bg-white outline-none rounded-lg text-sm md:text-base"
              placeholder="Message"
              rows={4}
            ></textarea>
            <button
              className="text-[#331A15] mt-2 border border-[#331A15] rancho px-6 md:px-10 py-2 md:py-3 rounded-[30px] cursor-pointer text-sm md:text-xl hover:text-white my-text duration-500 hover:bg-[#331A15]"
              type="button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contuct;

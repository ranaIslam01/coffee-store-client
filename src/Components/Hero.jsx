import React from "react";
import heroBg from "../assets/images/more/heroBg.png";
import card1 from "../assets/images/icons/1.png";
import card2 from "../assets/images/icons/2.png";
import card3 from "../assets/images/icons/3.png";
import card4 from "../assets/images/icons/4.png";

const Hero = () => {
  return (
    <>
      <div
        className="h-[80vh] md:h-screen bg-cover bg-center px-4 sm:px-6 md:px-[10%] lg:px-[15%] flex items-center justify-end"
        style={{ background: `url(${heroBg})` }}
      >
        <div>
          <h1 className="text-3xl md:text-[55px] rancho text-white my-text">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white text-base mt-2">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of <br /> every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="text-lg md:text-xl text-[#242222] my-text mt-6 md:mt-8 rancho cursor-pointer py-2 md:py-3 px-4 md:px-5 bg-[#E3B577] rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      <div className="py-13.75 px-[10%] bg-[#ECEAE3]">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4   items-center gap-6">
          <div>
            <img src={card1} alt="" />
            <h3 className="text-[#331A15] my-text mt-4 text-3xl rancho">
              Awesome Aroma
            </h3>
            <p className="text-[#1B1A1A] text-base mt-2">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src={card2} alt="" />
            <h3 className="text-[#331A15] my-text mt-4 text-3xl rancho">
              High Quality
            </h3>
            <p className="text-[#1B1A1A] text-base mt-2">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div>
            <img src={card3} alt="" />
            <h3 className="text-[#331A15] my-text mt-4 text-3xl rancho">
              Pure Grades
            </h3>
            <p className="text-[#1B1A1A] text-base mt-2">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img src={card4} alt="" />
            <h3 className="text-[#331A15] my-text mt-4 text-3xl rancho">
              Proper Roasting
            </h3>
            <p className="text-[#1B1A1A] text-base mt-2">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

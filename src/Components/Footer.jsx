import React from "react";
import footerBg from "../assets/images/more/footerBg.jpg";
import subFooter from "../assets/images/more/subFooter.jpg";
import Contuct from "./Contuct";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sub Footer */}
      <div
        style={{
          backgroundImage: `url(${subFooter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-sm sm:text-base md:text-xl py-3 md:py-4 text-center rancho text-white">
          © Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../banner/banner.css"; // Import your CSS file for styling
import banner from "../../images/banner.png";
import abzImage from "../../images/abz.png";

const Banner = () => {
  
  return (
    <div className="banner">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="mlog">
        <img src="/logos/mlog.png" alt="Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;

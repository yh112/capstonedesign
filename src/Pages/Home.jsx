import React, { useState } from "react";
import landingImage from "../assets/bg_home.png";
import btn1 from "../assets/btn_bg.png";
import btn2 from "../assets/btn_overview.png";
import btn3 from "../assets/btn_haengsildo.png";
import btn4 from "../assets/btn_past_present.png";
import Door from "../components/Door";
import open1 from "../assets/door2_open1.png";
import open2 from "../assets/door2_open2.png";
import open3 from "../assets/door2_open3.png";
import open4 from "../assets/door2_open4.png";

const Home = () => {
  return (
    <div className="background">
      <img className="background-image" src={landingImage} />
      <div className="door-container">
        <Door buttonImg={btn1} link="/background" />
        <Door buttonImg={btn2} link="/overview" />
        <Door buttonImg={btn3} link="/haengsildo" />
        <Door buttonImg={btn4} link="/pastandpresent" />
      </div>
    </div>
  );
};

export default Home;
import React, { useState } from "react";
import home from "../assets/home.png";
import home_hover from "../assets/home_hover.png";

const House = ({ family, top, left, src }) => {
  const [homeSrc, setHomeSrc] = useState(home);
  const [homeState, setHomeState] = useState(false);
  const onMouseOver = () => {
    setHomeState(true);
  };
  const onMouseOut = () => {
    setHomeState(false);
  };

  return (
    <>
      <div className="house-container" style={{ top: top, left: left }}>
        {homeState && <img className="house-title" src={src} />}
        {!homeState && (
          <img
            className="house-content"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            src={home}
          />
        )}
        {homeState && (
          <img
            className="house-content-hover"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            src={home_hover}
          />
        )}
        <p className="house-name">{family}</p>
      </div>
    </>
  );
};

export default House;
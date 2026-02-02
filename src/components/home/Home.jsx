import React, { useState } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = ({ onEasterEgg }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleImageClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 7) {
      onEasterEgg();
      setClickCount(0);
    }
  };

  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />

          <div
            className="home_img"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          ></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

import React from "react";

function Hero() {
  return (
    <>
      <div className="Hero">
        <h2>
          Dive into a <span>universe</span> of un-ending content and channels
        </h2>
        <button className="btnFreeStart">Start FREE trial</button>
        <div className="BackgroudBtn">
          <button className="btnleft btnBG">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button className="btnBGo"></button>
          <button className="btnBGo"></button>
          <button className="btnBGo"></button>
          <button className="btnBGo"></button>
          <button className="btnRight btnBG">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;

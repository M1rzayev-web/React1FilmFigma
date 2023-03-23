import React from "react";
function LeftFooter() {
  return (
    <>
      <div className="FooterLeftDiv">
        <a className="LogoWhite" href="#">
          <img src="/public/images/logoWhite.svg" alt="" />
        </a>
        <p className="FooterP1">
          Hot Africa, we offer original, exclusive and premium stories.
          Everything you want to watch, anytime, anywhere and as much.
        </p>

        <div className="FooterBtn">
          <button className="FooterBtn1">
            <i class="fa-brands fa-apple fa-beat-fade"></i>
            <span>
              <p className="appleP">Download on the</p>
              <h4 className="appleH4">App Store</h4>
            </span>
          </button>
          <button className="FooterBtn1 ">
            <i class="fa-brands fa-google-play fa-beat-fade"></i>
            <span>
              <p className="appleP">GET IT ON</p>
              <h4 className="appleH4">Google Play</h4>
            </span>
          </button>
        </div>
        <div className="FooterLink">
          <a className="FooterLinkA1" href="#">
            <i class="fa-brands fa-square-facebook fa-shake"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-square-instagram fa-shake"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-square-twitter fa-shake"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-youtube fa-shake"></i>
          </a>
        </div>
        <div className="FooterLinkAList">
          <a href="#">Terms of use </a>
          <a href="#">Privacy </a>
          <a href="#">Policy SiteMap</a>
        </div>
      </div>
    </>
  );
}

export default LeftFooter;

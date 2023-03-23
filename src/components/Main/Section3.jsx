import React from "react";
function Section3() {
    return (
      <>
        <section className="Section3">
          <span className="Sec3Span">
            <h3>New Movies</h3>
            <a href="#">
              View all<i class="fa-solid fa-chevron-right"></i>
            </a>
          </span>
          <div className="Sec3Div">
            <ul className="Sec3List">
              <li className="Sec3Item">
                <a href="#">
                  <img src="/public/images/newImg1.png" alt="" />
                </a>
              </li>
              <li className="Sec3Item">
                <a href="#">
                  <img src="/public/images/newImg2.png" alt="" />
                </a>
              </li>

              <li className="Sec3Item">
                <a href="#">
                  <img src="/public/images/newImg3.png" alt="" />
                </a>
              </li>

              <li className="Sec3Item">
                <a href="#">
                  <img src="/public/images/newImg4.png" alt="" />
                </a>
              </li>

              <li className="Sec3Item">
                <a href="#">
                  <img src="/public/images/newImg1.png" alt="" />
                </a>
              </li>

              <li className="Sec3Item">
                <a href="#">
                  <img src="/public/images/newImg5.png" alt="" />
                </a>
              </li>

              <li className="Sec3Item">
                <a href="#">
                  <img src="/public/images/newImg6.png" alt="" />
                </a>
              </li>
            </ul>
                    <button className="btnAddBanner2">
                        Add Banner
            </button>
          </div>
        </section>
      </>
    );
}
 
export default Section3
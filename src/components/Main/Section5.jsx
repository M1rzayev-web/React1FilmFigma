import React from "react";

function Section5() {
  return (
    <>
      <section className="Section5">
        <span className="Sec5Span">
          <h3>Games</h3>
          <a href="#">
            View all<i class="fa-solid fa-chevron-right"></i>
          </a>
        </span>
        <div className="Sec5Div">
          <ul className="Sec5List">
            <li className="Sec5Item">
              <a href="#">
                <img src="/public/images/mario.png" alt="" />
              </a>
            </li>
            <li className="Sec5Item">
              <a href="#">
                <img src="/public/images/fortnite.png" alt="" />
              </a>
            </li>

            <li className="Sec5Item">
              <a href="#">
                <img src="/public/images/pubg.png" alt="" />
              </a>
            </li>

            <li className="Sec5Item">
              <a href="#">
                <img src="/public/images/askar.png" alt="" />
              </a>
            </li>

            <li className="Sec5Item">
              <a href="#">
                <img src="/public/images/betman.png" alt="" />
              </a>
            </li>

            <li className="Sec5Item">
              <a href="#">
                <img src="/public/images/multik.png" alt="" />
              </a>
            </li>

            <li className="Sec5Item">
              <a href="#">
                <img src="/public/images/sonic.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Section5;

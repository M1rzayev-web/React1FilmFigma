import React, { useState, useEffect } from "react";
import { Malumot2 } from "../js/ArrayUchun";
  function Section2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(Malumot2);
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="Section2">
        <span className="Sec2Span">
          <h3>New Channels</h3>
          <a href="#">
            View all<i class="fa-solid fa-chevron-right"></i>
          </a>
        </span>
        <div className="Sec2Div">
          <ul className="sec1List">
           {data.map((item) => (
            <li className="sec1Item" key={item.FilmId}>
              <img src={item.images} alt="" />
              <div className="ItemListText">
                <div className="ListText1">
                  <h2>{item.Showing}</h2>
                  <h3>{item.Monster}</h3>
                </div>
                <div className="ListText1">
                  <h2>{item.Next}</h2>
                  <h3>{item.Name}</h3>
                </div>
              </div>
              <div className="ItemListAll">
                <div className="ItemListLink">
                  <p>{item.FilmText}</p>
                  <button className="WatchNowBtn">Watch Now</button>
                </div>
                <div className="ItemList">
                  <div className="ItemListDiv1">
                    <img src={item.imgSvg} alt="" />
                  </div>
                  <h3 className="ItemListH3">222</h3>
                </div>
              </div>
            </li>
          ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Section2;

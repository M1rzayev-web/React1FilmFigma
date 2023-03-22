import React, { useState, useEffect } from "react";
// import Section1Array from "../js/section1";

function section1() {
//   {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         const response = await fetch(Section1Array);
//         const jsonData = await response.json();
//         setData(jsonData);
//       };

//       fetchData();
//     }, []);
//   }
  return (
    <>
      <div className="section1">
        <h3 className="sec1h3">Recommended Channels</h3>
        <ul className="sec1List">
          <li className="sec1Item">
            <img src="/public/images/img1.png" alt="" />
            <div className="ItemListText">
              <div className="ListText1">
                <h2>Showing Now</h2>
                <h3>Monster Truck</h3>
              </div>
              <div className="ListText1">
                <h2>Up Next</h2>
                <h3>Emilly Watson</h3>
              </div>
            </div>
            <div className="ItemListAll">
              <div className="ItemListLink">
                <p>
                  Enjoy the best of action packed movies from NBC
                  international...
                </p>
                <button className="WatchNowBtn">Watch Now</button>
              </div>
              <div className="ItemList">
                <div className="ItemListDiv1">
                  <img src="/public/images/FoxChanel.svg" alt="" />
                </div>
                <h3 className="ItemListH3">212</h3>
              </div>
            </div>
          </li>
          <li className="sec1Item">
            <img src="/public/images/img2.png" alt="" />
            <div className="ItemListText">
              <div className="ListText1">
                <h2>Showing Now</h2>
                <h3>Monster Truck</h3>
              </div>
              <div className="ListText1">
                <h2>Up Next</h2>
                <h3>Emilly Watson</h3>
              </div>
            </div>
            <div className="ItemListAll">
              <div className="ItemListLink">
                <p>
                  Enjoy the best of action packed movies from NBC
                  international...
                </p>
                <button className="WatchNowBtn">Watch Now</button>
              </div>
              <div className="ItemList">
                <div className="ItemListDiv1">
                  <img src="/public/images/abc.svg" alt="" />
                </div>
                <h3 className="ItemListH3">212</h3>
              </div>
            </div>
          </li>
          <li className="sec1Item">
            <img src="/public/images/img3.png" alt="" />
            <div className="ItemListText">
              <div className="ListText1">
                <h2>Showing Now</h2>
                <h3>Monster Truck</h3>
              </div>
              <div className="ListText1">
                <h2>Up Next</h2>
                <h3>Emilly Watson</h3>
              </div>
            </div>
            <div className="ItemListAll">
              <div className="ItemListLink">
                <p>
                  Enjoy the best of action packed movies from NBC
                  international...
                </p>
                <button className="WatchNowBtn">Watch Now</button>
              </div>
              <div className="ItemList">
                <div className="ItemListDiv1">
                  <img src="/public/images/nbc.svg" alt="" />
                </div>
                <h3 className="ItemListH3">212</h3>
              </div>
            </div>
          </li>
          <li className="sec1Item">
            <img src="/public/images/img4.png" alt="" />
            <div className="ItemListText">
              <div className="ListText1">
                <h2>Showing Now</h2>
                <h3>Monster Truck</h3>
              </div>
              <div className="ListText1">
                <h2>Up Next</h2>
                <h3>Emilly Watson</h3>
              </div>
            </div>
            <div className="ItemListAll">
              <div className="ItemListLink">
                <p>
                  Enjoy the best of action packed movies from NBC
                  international...
                </p>
                <button className="WatchNowBtn">Watch Now</button>
              </div>
              <div className="ItemList">
                <div className="ItemListDiv1">
                  <img src="/public/images/espa.svg" alt="" />
                </div>
                <h3 className="ItemListH3">212</h3>
              </div>
            </div>
          </li>
          <li className="sec1Item">
            <img src="/public/images/img5.png" alt="" />
            <div className="ItemListText">
              <div className="ListText1">
                <h2>Showing Now</h2>
                <h3>Monster Truck</h3>
              </div>
              <div className="ListText1">
                <h2>Up Next</h2>
                <h3>Emilly Watson</h3>
              </div>
            </div>
            <div className="ItemListAll">
              <div className="ItemListLink">
                <p>
                  Enjoy the best of action packed movies from NBC
                  international...
                </p>
                <button className="WatchNowBtn">Watch Now</button>
              </div>
              <div className="ItemList">
                <div className="ItemListDiv1">
                  <img src="/public/images/usa.svg" alt="" />
                </div>
                <h3 className="ItemListH3">212</h3>
              </div>
            </div>
          </li>
          <li className="sec1Item">
            <img src="/public/images/img6.png" alt="" />
            <div className="ItemListText">
              <div className="ListText1">
                <h2>Showing Now</h2>
                <h3>Monster Truck</h3>
              </div>
              <div className="ListText1">
                <h2>Up Next</h2>
                <h3>Emilly Watson</h3>
              </div>
            </div>
            <div className="ItemListAll">
              <div className="ItemListLink">
                <p>
                  Enjoy the best of action packed movies from NBC
                  international...
                </p>
                <button className="WatchNowBtn">Watch Now</button>
              </div>
              <div className="ItemList">
                <div className="ItemListDiv1">
                  <img src="/public/images/trueTv.svg" alt="" />
                </div>
                <h3 className="ItemListH3">212</h3>
              </div>
            </div>
          </li>
        </ul>
        <button className="btnAddBanner">Add Banner</button>
      </div>
    </>
  );
}

export default section1;

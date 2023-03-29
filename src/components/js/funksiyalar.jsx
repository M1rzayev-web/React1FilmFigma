// // const bosilganlar = []
// // import { Malumot1 } from "./ArrayUchun"
// // const Saqlanglar=document.querySelector(".Saqlanganlar")
// // const add = document.querySelector(".sec1Item")
// // const btnBell=document.querySelector(".btnBell")
// // add.addEventListener("click", function () {
    
// // })
// // btnBell.addEventListener("click", function () {
// //     Saqlanglar.getElementsByClassName.display="block"
// // })
// // add.addEventListener("click", function () {
// //     chiqarKorzinka()
// // })
// // function addListFunc(id) {
// //     const addList = Malumot1.find((item) => item.id === id)
// //     addList.push(bosilganlar)
    
// // }
// // -------------------------
// {/* <li className="sec1Item" key={item.FilmId}>
//               <img src=${item.images} alt="" />
//               <div className="ItemListText">
//                 <div className="ListText1">
//                   <h2>${item.Showing}</h2>
//                   <h3>${item.Monster}</h3>
//                 </div>
//                 <div className="ListText1">
//                   <h2>${item.Next}</h2>
//                   <h3>${item.Name}</h3>
//                 </div>
//               </div>
//               <div className="ItemListAll">
//                 <div className="ItemListLink">
//                   <p>${item.FilmText}</p>
//                   <button className="WatchNowBtn">Watch Now</button>
//                 </div>
//                 <div className="ItemList">
//                   <div className="ItemListDiv1">
//                     <img src=${item.imgSvg} alt="" />
//                   </div>
//                   <h3 className="ItemListH3">222</h3>
//                 </div>
//               </div>
//             </li> */}
// const bosilganlar = []
// import { Malumot1 } from "./ArrayUchun"
// const Saqlanglar = document.querySelector(".Saqlanglar");
// const sec1Item=document.querySelector(".sec1Item")
// const btnBell=document.querySelector(".btnBell")
// btnBell.addEventListener("click", function (e) {
//     e.preventDefault();
//     // Saqlanglar.style.display="block"
// })
// sec1Item.addEventListener("click", function(){
//     korzinkaQosh(id);
// })
// // Maxsulotni korzinkaga qo'shish
// function korzinkaQosh(id) {
//   const maxsulot = Malumot1.find((item) => item.id === id);
//   bosilganlar.push(maxsulot);
//   chiqarKorzinka();
// }

// // Korzinkani sahifaga chiqarish
// function chiqarKorzinka() {
//   let korzinkaItems = "";
//   bosilganlar.forEach(function (item) {
//     korzinkaItems += `{<li className="sec1Item" key={item.FilmId}>
//               <img src=${item.images} alt="" />
//               <div className="ItemListText">
//                 <div className="ListText1">
//                   <h2>${item.Showing}</h2>
//                   <h3>${item.Monster}</h3>
//                 </div>
//                 <div className="ListText1">
//                   <h2>${item.Next}</h2>
//                   <h3>${item.Name}</h3>
//                 </div>
//               </div>
//               <div className="ItemListAll">
//                 <div className="ItemListLink">
//                   <p>${item.FilmText}</p>
//                   <button className="WatchNowBtn">Watch Now</button>
//                 </div>
//                 <div className="ItemList">
//                   <div className="ItemListDiv1">
//                     <img src=${item.imgSvg} alt="" />
//                   </div>
//                   <h3 className="ItemListH3">222</h3>
//                 </div>
//               </div>
//             </li> }`;
//   });
//   bosilganlar.innerHTML = korzinkaItems;
// }

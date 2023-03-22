import React from "react";

function Nav() {
    // const btnSearch = document.querySelector(".btnSearch");
    // const SearchInput = document.querySelector(".SearchInput");
    // btnSearch.addEventListener("click", function () {
    //   Search();
    // });
    // function Search() {
    //   SearchInput.style.display = "block";
    // }
  return (
    <>
      <nav className="Nav">
        <a className="NavLogo" href="#">
          <img src="/public/images/logo.svg" alt="" />
        </a>
        <ul className="NavList">
          <li className="NavItem">
            <a href="#">Movies</a>
          </li>
          <li className="NavItem">
            <a href="#">Series</a>
          </li>
          <li className="NavItem">
            <a href="#">Channels</a>
          </li>
          <li className="NavItem">
            <a href="#">Music</a>
          </li>
        </ul>
        <input className="SearchInput" type="text" placeholder="Search..." />
        <ul className="NavSeLo">
          <button className="btnSearch btnNav">
            <i class="fa-solid fa-magnifying-glass"></i>Search
          </button>
          <button className="btnSig-in btnNav">
            <i class="fa-solid fa-user"></i>Sig in
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
import React, { useRef } from "react";

function Nav() {
  const searchInputRef = useRef(null);
  const searchInputBtnXRef = useRef(null);
  const search = useRef(null);
  const handleSearchBtnXClick = () => {
    searchInputRef.current.value = "";
    searchInputRef.current.style.display = "none";
    searchInputBtnXRef.current.style.display = "none";
  };
  const searchBtn = () => {
    
  }

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
        <input
          id="searchInput"
          className="SearchInput"
          type="text"
          placeholder="Search..."
          ref={searchInputRef}
        />
        <button
          id="searchInputBtnX"
          className="SearchInputBtnX"
          onClick={handleSearchBtnXClick}
          ref={searchInputBtnXRef}
        >
          X
        </button>
        <div className="Saqlanganlar"></div>
        <ul className="NavSeLo">
          <button className="btnSearch btnNav">
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </button>
          <button className="btnBell">
            <i className="fa-solid fa-bell"></i>
          </button>
          <button className="btnSig-in btnNav">
            <i className="fa-solid fa-user"></i>Sig in
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

import React, { useState, useEffect } from "react";
import "../Styles/Navbar/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarFlag, setNavbarFlag] = useState(false);
  const [scroll, setScroll] = useState(false);

  const Nav_Scroll = () => {
    if (window.scrollY >= 65) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", Nav_Scroll);

  console.log(scroll);
  // useEffect(() => {

  // }, []);

  const handleNavbarChange = () => {
    if (scroll) {
      return "dark";
    } else {
      return "trans";
    }
  };

  const handleNavbarStateChange = (): any => {
    setNavbarFlag((currentState) => !currentState);
  };
  return (
    <div className={`navbar__container ${scroll ? "dark" : "trans"}`}>
      <div className="navbar__content">
        {navbarFlag ? (
          <div className="menu-mobile__container">
            <div className="menu-mobile__content">
              <ul className="flex flex-col gap-4">
                <li className="text-2xl text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-2xl text-white">
                  <Link to="/under-construction">Resorts</Link>
                </li>
                <li className="text-2xl text-white">
                  <Link to="/under-construction">Prices</Link>
                </li>
                <li className="text-2xl text-white">
                  <Link to="/under-construction">Reviews</Link>
                </li>
                <li className="text-2xl text-white">
                  <Link to="/under-construction">Contacts</Link>
                </li>
              </ul>
              <RxCross1
                color="#ffff"
                className="text-2xl absolute top-8 right-9"
                onClick={handleNavbarStateChange}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="navbar__logo">
              <h1 className="small:text-2xl medium:text-3xl text-white">
                Minhas.
              </h1>
            </div>

            <ul className="flex gap-5 text-base px-2 small:hidden medium:hidden superSmall:hidden">
              <li className=" large:text-lg xlg:text-lg">
                <Link to="/">Home</Link>
              </li>
              <li className=" large:text-lg xlg:text-lg">
                <Link to="/under-construction">Resorts</Link>
              </li>
              <li className=" large:text-lg xlg:text-lg">
                <Link to="/under-construction">Prices</Link>
              </li>
              <li className=" large:text-lg xlg:text-lg">
                <Link to="/under-construction">Reviews</Link>
              </li>
              <li className=" large:text-lg xlg:text-lg">
                <Link to="/under-construction">Contacts</Link>
              </li>
            </ul>
            <div className="small:hidden medium:hidden superSmall:hidden flex gap-2 text-xl">
              <Link to="under-construction">
                <BsSearch color="#fff" />
              </Link>
              <Link to="under-construction">
                <AiOutlineUser color="#fff" />
              </Link>
            </div>

            <GiHamburgerMenu
              color="#fff"
              className="text-2xl hidden small:flex medium:flex superSmall:flex"
              onClick={handleNavbarStateChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import "../navbar.css";
import { GoTriangleDown } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  
  return (
    <nav className="nav">
      <a href="#" className="nav__brand logo">

        FusionHub

      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="more">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="more">
            Italian
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="more">
            Chinese
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="more">
            Breads
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="more">
            Snacks
          </a>
        </li>
        <li className="nav__item">
          <div class="dropdown">
            <li class="more">More
              <GoTriangleDown className="triangledown" />
            </li>
            <div class="dropdown-content">
              <a href="#">Drinks</a>
              <a href="#">Dessert</a>
              <a href="#">Fruits</a>
            </div>
          </div>

        </li>

      </ul>
      <div onClick={navToggle} className={icon}>
      <li class="dropbtn-media ">More
              
            </li>
        
      </div>
      <div className="search">
        <FaSearch/>
        
        <div className="search-text">
          Search Something 
        </div>
      </div>

      <div className="filler" >
        <p></p>
      </div>

    </nav>
  );
}

export default Navbar;
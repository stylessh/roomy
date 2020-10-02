import React, { useRef } from "react";

import "./navbar.scss";

const Navbar = () => {
  let navbar = useRef(null);

  const openNav = () => {
    navbar.classList.add("active");
  };

  const closeNav = () => {
    navbar.classList.remove("active");
  };

  return (
    <header className="header">
      <div className="hamburguer" onClick={openNav}>
        <img src="/images/icon-hamburger.svg" alt="menu icon" />
      </div>

      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>


      <nav className="navbar" ref={(el) => (navbar = el)}>
        <div className="close" onClick={closeNav}>
          <img src="/images/icon-close.svg" alt="close icon" />
        </div>

        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/shop">shop</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

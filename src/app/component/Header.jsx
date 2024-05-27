import React from "react";
import "../style/Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Next Js</div>
      <nav className="nav-links">
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;

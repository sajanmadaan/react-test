import { Link } from "react-router-dom";
import React from "react";
import "../css/Style.css"

export const Navbar = () => {
  return (
    <div className="StyleMartBar">
        <Link id="home"  to={"/"}>Home</Link>
        <Link id="about"  to={"/about"}>About</Link>
        <Link id="products"  to={"/products"}>Products</Link>
     
    </div>
  );
};

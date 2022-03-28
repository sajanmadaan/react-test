import React from "react";
import { Link } from "react-router-dom";
export const About = () => {
    return (
        <div>
        <h2>About</h2>
        <h3>Welcome to StyleMart</h3>
        <p>StyleMart is World's leading brand.Go Stylish!</p>
        <p>Click on Home to go to <Link  to={"/"}>main</Link> page and click on  <Link   to={"/products"}>Products</Link> to get latest and stylish products</p>
        </div>
    )
}

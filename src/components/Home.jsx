import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div> 
            
            <h2>Home</h2>
            <h3>Welcome to StyleMart</h3>
            <p>StyleMart is World's leading brand.Go Stylish!</p>
            <p>Click on About to know more  <Link  to={"/about"}>about</Link> us and click on  <Link   to={"/products"}>Products</Link> to get latest and stylish products</p>
        </div>
       
    )
}


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getProducts,
  sortProductsLow,
  sortProductsHigh,
} from "../Redux/actions";
import { Link } from "react-router-dom";

export const Products = () => {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  useEffect(() => {
    const getproductsData = () => {
      axios
        .get("https://movie-fake-server.herokuapp.com/products")
        .then(({ data }) => {
          console.log(data)
          dispatch(getProducts(data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getproductsData();
  }, []);

  const handleSort = (e) => {
    if (e.target.value == "asc") {
      dispatch(sortProductsLow());
    } else if (e.target.value == "desc") {
      dispatch(sortProductsHigh());
    }
  };

  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {data &&
          data.map((item) => {
            return (
              <div className="eachPro">
                  <Link to={`/products/${item.id}`}><img src={item.image} alt="" /></Link>
                
                <h3>
                  {item.title}
                </h3>
                <h4>
                  Rs:-{item.price}
                </h4>
              </div>
            );
          })}
      </div>
    </>
  );
};

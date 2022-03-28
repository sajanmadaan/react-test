import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";


export const EachProduct = () => {
    const [data,setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
    const getproductsData = () => {
      axios
        .get(`https://movie-fake-server.herokuapp.com/products/${id}`)
        .then(({ data }) => {
            setData(data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getproductsData();
  }, []);

    return <div className="eachDisplay">
        <div> <img src={data.image} alt="" /></div>
        
            <div> <h3>Title:-{data.title} </h3>
                <h4>
                  Price:- Rs.{data.price}
                </h4> 
                <h4>
                  Cateogory:-{data.category}
                </h4>
                <h4>
                  Brand:-{data.brand}
                </h4>
            </div>
               
               
        </div>
}




  



                 

import { GETPRODUCT, HIGHTOLOW, LOWTOHIGH } from "./actionTypes";

export const getProducts = (payload) => {
  return {
    type: GETPRODUCT,
    payload,
  };
};


export const sortProductsLow = (payload) => {
  return {
    type: LOWTOHIGH,
    payload,
  };
};

export const sortProductsHigh = (payload) => {
  return {
    type: HIGHTOLOW,
    payload,
  };
};

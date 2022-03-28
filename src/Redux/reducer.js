import { GETPRODUCT, HIGHTOLOW, LOWTOHIGH } from "./actionTypes";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GETPRODUCT:
      return { ...state, products: [...state.products, ...payload] };

    case LOWTOHIGH:
      return {
        ...state,
        products: [...state.products.sort((a, b) => a.price - b.price)],
      };
    case HIGHTOLOW:
      return {
        ...state,
        products: [...state.products.sort((a, b) => b.price - a.price)],
      };
    default:
      return { ...state };
  }
};

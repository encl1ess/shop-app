const SET_CATEGORIES = "SET_CATEGORIES";
const SET_PRODUCTS_NAMES = "SET_PRODUCTS_NAMES";
const SET_COLORS = "SET_COLORS"
const SET_PRICE = "SET_PRICE";
const SET_SORTING = "SET_SORTING"

const defaultState = {
  categories: [],
  productsNames: [],
  colors: [],
  price: [,],
  sorting: "none"
};

const filterReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_PRODUCTS_NAMES:
      return {
        ...state,
        productsNames: action.payload,
      };
    case SET_COLORS:
      return {
        ...state,
        totalCoucoorsnt: action.payload,
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case SET_SORTING:
        return {
          ...state,
          sorting: action.payload,
        };
    default:
      return state;
  }
};

export default filterReducer;

export const setCategories = (categories: any[]) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductsNames = (productsNames:any[]) => ({
  type: SET_PRODUCTS_NAMES,
  payload: productsNames,
});
export const setColors = (colors: any[]) => ({
  type: SET_COLORS,
  payload: colors,
});
export const setPrice = (price: number[]) => ({
  type: SET_PRICE,
  payload: price,
});

export const setSorting = (sorting: string[]) => ({
  type: SET_SORTING,
  payload: sorting,
});
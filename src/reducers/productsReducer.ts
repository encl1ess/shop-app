import { Action } from "history";

const SET_COUNT = "SET_COUNT";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_TOTAL = "SET_TOTAL";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_MAX_PRICE = "SET_MAX_PRICE";
const SET_MIN_PRICE = "SET_MIN_PRICE";
const SET_CATEGORIES_LIST = "SET_CATEGORIES_LIST";
const SET_PRODUCTS_NAME_LIST = "const SET_PRODUCTS_NAME_LIST";
const SET_COLORS_LIST = "SET_COLORS_LIST";
const defaultState = {
  products: [],
  count: 0,
  currentPage: 1,
  perPage: 6,
  totalCount: 0,
  maxPrice: 0,
  minPrice: 1000,
  categoriesList: [],
  productsNameList: [],
  colorsList: [],
};

const productsReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        totalCount: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload,
      };
    case SET_MIN_PRICE:
      return {
        ...state,
        minPrice: action.payload,
      };
      case SET_CATEGORIES_LIST:
        return {
          ...state,
          categoriesList: action.payload,
        };
      case SET_COLORS_LIST:
      return {
        ...state,
        colorsList: action.payload,
      };
      case SET_PRODUCTS_NAME_LIST:
      return {
        ...state,
        productsNameList: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;

export const setProducts = (products: any[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});
export const setCount = (count: number) => ({
  type: SET_PRODUCTS,
  payload: count,
});
export const setTotal = (total: number) => ({
  type: SET_TOTAL,
  payload: total,
});
export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
export const setMaxPrice = (maxPrice: number) => ({
  type: SET_MAX_PRICE,
  payload: maxPrice,
});
export const setMinPrice = (minPrice: number) => ({
  type: SET_MIN_PRICE,
  payload: minPrice,
});
export const setCategotiesList = (categoriesList: any[]) => ({
  type: SET_CATEGORIES_LIST,
  payload: categoriesList,
});
export const setColorsList = (colorsList: any[]) => ({
  type: SET_COLORS_LIST,
  payload: colorsList,
});
export const setProductsNameList = (productsNameList: any[]) => ({
  type: SET_PRODUCTS_NAME_LIST,
  payload: productsNameList,
});

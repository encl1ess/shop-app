import React, { FC, useContext, useEffect, useState } from "react";
import CheckboxList from "../UIKit/CheckboxList";
// import TooltipSlider, { handleRender } from './TooltipSlider';
import Slider from "rc-slider";
import "./../styles/css/index.css";
import "rc-slider/assets/index.css";
import { store } from "../reducers";
import { useDispatch, useSelector } from "react-redux";
import { setColors } from "../reducers/filterReducer";
import { convertCompilerOptionsFromJson } from "typescript";

const AsideFilter = () => {
  const maxPrice = useSelector(() => store.getState().products.maxPrice);
  const minPrice = useSelector(() => store.getState().products.minPrice);
  const categories = useSelector(() => store.getState().products.categoriesList);
  const productsName = useSelector(() => store.getState().products.productsNameList);
  const colors = useSelector(() => store.getState().products.colorsList);
  const [values, setValues] = useState([,]);
  useEffect(() => {
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);
  function onChange(value: any) {
    setValues(value);
  }

  function filterHandler() {
    
  }
  return (
    <aside className="filter-menu">
      <CheckboxList
        onClick = {(e:any) => {console.log(e.target.checked)}}
        className="checkbox-list"
        title="Category"
        filters={categories}
      />
      <CheckboxList
        onClick = {(e:any) => {console.log(e.target.id)}}
        className="checkbox-list"
        title="Products"
        filters={productsName}
      />
      <CheckboxList
        className="color-list"
        title="Colors"
        filters={colors}
      />
      <div className="range-container">
        <h3>Price Range</h3>
        <Slider
          range
          allowCross={false}
          min={minPrice}
          max={maxPrice}
          defaultValue={[minPrice, maxPrice]}
          onChange={onChange}
        />
        <div className="label-wrapper">
          <label>${values[0]}</label>
          <label>${values[1]}</label>
        </div>
      </div>
    </aside>
  );
};

export default AsideFilter;

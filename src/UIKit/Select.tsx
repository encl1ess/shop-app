import React from "react";
import "../styles/css/index.css";
import { IProduct, IChoice } from "../types/types";


function Select(props: any) {
  const {label, choices} = props;
  return (
    <div className="selection">
      {
        label &&  <label htmlFor="sort-select">{label}</label>
      }
  
      <select id="sort-select">
        {
        choices.map((elem: IChoice, index: number) => (
          <option value={elem.id} key={index}>{elem.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;

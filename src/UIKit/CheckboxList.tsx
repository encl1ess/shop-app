import React, { FC, useState } from "react";
import "./../styles/css/index.css";
import { Checkbox } from ".";

interface CheckboxListProps {
  onClick?: Function;
  className?: string;
  title: string;
  filters: any[];
}

const CheckboxList: FC<CheckboxListProps> = ({ className, title, filters, onClick }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      {className == "checkbox-list" && (
        <div>
          {filters.map((filter, index) => (
            <Checkbox onClick={onClick} name={filter} key={index} />
          ))}
        </div>
      )}
      {className == "color-list" && (
        <div>
          {filters.map((color, index) => (
            <label key={index}>
              <input type="checkbox" name=""></input>
              <img src={require(`../static/images/colors/${color}.png`)}></img>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxList;

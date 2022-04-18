import React from "react";
import "./../styles/css/index.css";
import { IconButton, CartIcon, HamburgerIcon } from "../UIKit";
import { connect } from "react-redux";



const Counter = ({counter}:any) => {
  return (
    <span className="counter">{counter}</span>
  );
};

const mapStateToProps = (state: any) => {
  return state.counter
}
export default connect(mapStateToProps)(Counter);

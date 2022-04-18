import React from "react";
import "./../styles/css/index.css";
import { IconButton, CartIcon, HamburgerIcon } from "../UIKit";
import Counter from "./Counter";
import { store } from "../reducers";
import { Provider } from "react-redux";



const Header = (props: any) => {
  return (
    <header className="page-header">
      <div className="wrapper">
        <IconButton size={35} icon={<HamburgerIcon />} />
        <a href="#" className="logo">
          BWS
        </a>
        <div className="cart-wrapper">
          <IconButton size={30} icon={<CartIcon />} />
          <Provider store={store}>
            <Counter />
          </Provider>
        </div>
      </div>
    </header>
  );
};

export default Header;

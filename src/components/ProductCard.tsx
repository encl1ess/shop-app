import React, { useEffect, useState } from 'react';
import './../styles/css/index.css';
import { IconButton, CartIcon, LikeIcon } from '../UIKit';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { inc } from '../reducers/counterReducer';
import { setProducts } from '../reducers/productsReducer';


declare let require: any;
function ProductCard({item}: any) {
  const dispatch = useDispatch();
  // const count = use
  function onCartClick () {
    dispatch(inc());
  }
  const {id, title, price, discount} = item;
  return (
    <div className='product-card'>
      { discount > 0 &&
        <div className='sale-plate'>sale</div>
      }
      <Link to={`/shop/${id}`}>
        <img src={require(`../static/images/products/${id}.png`)}></img>
        <div className="product-card__title">{title}</div>
      </Link>
      <footer className="product-card-footer">
        <div className="product-card-footer__price">&#36;{price}</div>
        <IconButton icon={<LikeIcon />} />
        <IconButton onClick={onCartClick} icon={<CartIcon />} />
      </footer>
    </div>
   
  );
}
function SalePlate() {
  return <div className='product-card__sale-plate'>sale</div>
}
// const mapStateToProps = (state: any) => {
//   return {
//     counter: state
//   }
// }
export default ProductCard;

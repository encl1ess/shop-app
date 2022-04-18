import React, { useEffect, useState } from "react";
import "../styles/css/index.css";
import { CheckboxList, Select, Button, IconButton } from "../UIKit";
import LikeIcon from "../static/images/icons/like-icon.svg";
import ToBottom from "../static/images/icons/to-bottom.svg";
import { Service } from "../services/service";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inc } from "../reducers/counterReducer";
import Loader from "./Loader";



const serv = new Service();
function ProductInfo({match}: any) {
  
  const [item, setItem]= useState<any>([]);
  const {id} = useParams();
  useEffect(() => {
    serv.getProductById(Number(id)).then(res => setItem(res));
  },[]);
  const dispatch = useDispatch();
  // const count = use
  function onCartClick () {
    dispatch(inc());
  }
  function showHidden() {
    console.log('CLIKED');
  }
  const {
    description,
    discount,
    id: mid,
    tag,
    sqft,
    title,
    additional,
    units
  } = item;
  return (
    item.length == 0  ? 
    <Loader />: 
     <div className="product-info">
      <div className="product-info__poster">
        {discount > 0 && <div className="sale-plate">{`-${discount}%`}</div>}
        <img src={require(`../static/images/products/${mid}.png`)}></img>
      </div>
      <div className="product-info__body">
        <div className="product-info__tag">{tag}</div>
        <div className="product-info__title">{title}</div>
        <div className="product-info__sqft-price">{sqft}</div>
        <div className="product-info__descr">{description}</div>
        <div className="product-info__select">
          <CheckboxList
            className="color-list"
            title="Colors"
            filters={["beige", "grey", "brown", "lightGrey", "lightBrown"]}
          />
          <Select
            choices={[
              { id: 1, name: "Border Shortways" },
              { id: 2, name: "Border Shortways" },
            ]}
          />
        </div>
        <div className="product-info__buttons">
          <Button onClick = {onCartClick}
            className="green"
            width="382px"
            height="50px"
            content="Add to Cart"
          />{" "}
          <IconButton size={50} icon={LikeIcon} />
        </div>
        {additional && <div className="product-info__slider">
          <header>
            <h3>Additional information</h3> <IconButton onClick={showHidden} customBorder = "none" icon={ToBottom} />
          </header>
          <article>{additional}</article>
        </div>
        }

        {units && 
        <div className="product-info__slider">
          <header>
            <h3>Units</h3> <IconButton onClick={showHidden} customBorder = "none" icon={ToBottom} />
          </header>
          <article>
            <ul>{
                units.map((unit:any, index:number) => <li key={index}>{unit}</li>)
              }
            </ul>
            </article>
        </div>
        }
      </div>
    </div>
  );
}

export { ProductInfo };

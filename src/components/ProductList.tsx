import React, { FC, useEffect, useState } from "react";
import { IProduct, IChoice } from "../types/types";
import ProductCard from "./ProductCard";
import "./../styles/css/index.css";
import { Button, Select } from "../UIKit";
import { IconButton } from "../UIKit";
import Left from "./../static/images/icons/to-left.svg";
import Right from "./../static/images/icons/to-right.svg";
import Grid from "./../static/images/icons/grid.svg";
import List from "./../static/images/icons/list.svg";
import { store } from "../reducers";
import { useDispatch, useSelector } from "react-redux";
import { sortDataByPrice } from "./../services/service";
import { setCurrentPage } from "../reducers/productsReducer";
import Loader from "./Loader";

const ProductList: FC = () => {
  function onCLick(page: number) {
    if(typeof page == 'number') {
      dispatch(setCurrentPage(page));
    } 
  }
  const dispatch = useDispatch();
  const choices: IChoice[] = [
    { id: 0, name: "Do not sort" },
    { id: 1, name: "Price High-Low" },
    { id: 2, name: "Price Low-High" },
  ];
  const products: IProduct[] = useSelector(
    () => store.getState().products.products
  );
  const totalСount: number = useSelector(
    () => store.getState().products.totalCount
  );
  const perPage: number = useSelector(() => store.getState().products.perPage);
  let currentPage: number = useSelector(
    () => store.getState().products.currentPage
  );

  const [pageProducts, setPageProducts] = useState(products.slice(0, perPage));
  const pages: any[] = [];
  const pagesCount = Math.ceil(totalСount / perPage);

  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = currentPage * perPage;
    setPageProducts(products.slice(startIndex, endIndex));
  }, [currentPage, products]);

  return (<div className="product-list">
      <header className="product-list__header">
        <Select label={"Sort by"} choices={choices} />
        <div className="product-list__appearance">
          <IconButton size={16} customBorder="none" icon={Grid} />
          <IconButton size={16} customBorder="none" icon={List} />
        </div>
      </header>
      <div className="product-list-body">
        {pageProducts.map((product) => (
          <ProductCard item={product} key={product.id} />
        ))}
      </div>
      <div className="product-list-pagination">
        <IconButton
          onClick={() =>
            dispatch(
              currentPage !== 1
                ? setCurrentPage(currentPage - 1)
                : setCurrentPage(currentPage)
            )
          }
          size={36}
          icon={Left}
        />
        <div className="product-list-pagination__pages">
          {pages.map((page, index) => (
            <span
              key={index}
              onClick={() => onCLick(page)}
              className={page === currentPage ? "current-page" : "page"}
            >
              {page}
            </span>
          ))}
        </div>
        <IconButton
          onClick={() =>
            dispatch(
              currentPage !== pagesCount
                ? setCurrentPage(currentPage + 1)
                : setCurrentPage(currentPage)
            )
          }
          size={36}
          icon={Right}
        />
      </div>
    </div>
  );
};


function createPages(pages: any[], pagesCount: number, currentPage: number) {
  if (pagesCount > 7) {
    if (currentPage >= 5) {
      pages.push(1);
      pages.push("...");
      if (currentPage < pagesCount - 3) {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
      }
      if (currentPage >= pagesCount - 3) {
        for (let i = pagesCount - 4; i <= pagesCount; i++) {
          pages.push(i);
        }
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
    }
    if (currentPage < pagesCount - 3) {
      pages.push("...");
      pages.push(pagesCount);
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
}

export default ProductList;

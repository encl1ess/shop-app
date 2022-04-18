import React, { useState } from "react";
import { IProduct } from "../types/types";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import { Checkbox } from "../UIKit";
import CheckboxList from "../UIKit/CheckboxList";
import AsideFilter from "../components/AsideFilter";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ShopPage() {
  return (
    <div>
      <Header />
      <section className="shop-page">
        <AsideFilter />
        <div className="wrapper">
          <ProductList />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ShopPage;

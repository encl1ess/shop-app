import React, { useState } from 'react';
import { IProduct } from '../types/types';
import ProductList from '../components/ProductList';
import { ProductInfo } from "../components/ProductInfo";
import { Checkbox } from '../UIKit';
import CheckboxList from '../UIKit/CheckboxList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Service } from '../services/service';
import { match } from 'assert';

function ProductPage() {
  return (
    <section className='product-page'>
      <Header/>
        <ProductInfo />
      <Footer />
    </section>
  );
}

export default ProductPage;
import React, { useEffect, useState } from 'react';
import './styles/css/index.css';
import {HomePage, ProductPage, ShopPage} from './pages'
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import { Service } from './services/service';
import { useDispatch, useSelector } from 'react-redux';
import { setCategotiesList, setColorsList, setMaxPrice, setMinPrice, setProducts, setProductsNameList, setTotal } from './reducers/productsReducer';
import { store } from './reducers';
import Loader from './components/Loader';

const serv = new Service();
function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
      serv.getAllProducts().then(res => {
        dispatch(setProducts(res));
        dispatch(setTotal(res.length));
        dispatch(setMaxPrice(res.reduce((acc:any, curr:any) => acc.price > curr.price ? acc : curr).price));
        dispatch(setMinPrice(res.reduce((acc:any, curr:any) => acc.price < curr.price ? acc : curr).price));
        dispatch(setCategotiesList(makeArray(res, "category", "All")));
        dispatch(setProductsNameList(makeArray(res, "title", "All")));
        dispatch(setColorsList(makeArray(res, "color")));
      })
  },[]);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop/' element={<ShopPage/>}/>
        <Route path='/shop/:id' element={<ProductPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

function makeArray(objArray: any, field:string, value: any = null) {
  const array = objArray.reduce((acc: any, elem:any) => { acc.push(elem[field]); return acc; } , value? [value]: []);
  return Array.from(new Set(array));
}


export default App;

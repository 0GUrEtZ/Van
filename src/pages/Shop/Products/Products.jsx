import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import s from '../shop.module.css'
import ProductCard from './ProductCard/ProductCard';
import ProductPage from './ProductPage/ProductPage';

const setActive = ({ isActive }) => isActive ? (s.active) : '';
const Products = ({ product, setProduct }) => {

    return (
        <div>
            <Link to='add' end className={s.button}>Add</Link>
            <ProductCard product={product} setProduct={setProduct} />
        </div>
    );
}

export default Products;
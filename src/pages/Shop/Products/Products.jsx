import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import s from '../shop.module.css'
import ProductCard from './ProductCard/ProductCard';
import ProductPage from './ProductPage/ProductPage';

const setActive = ({ isActive }) => isActive ? (s.active) : '';
const Products = ({ product, setProduct }) => {

    return (
        <div>
            <Link to='add' className={setActive} end><div className={s.button}>Add</div></Link>
            <Routes>
                <Route path='/' element={<ProductCard product={product} setProduct={setProduct} />} />
                {
                    product.map(item => (
                        <Route path={`/shop/${item.id}`} element={<ProductPage product={product} setProduct={setProduct} />} />
                    ))
                }
            </Routes>
        </div>
    );
}

export default Products;
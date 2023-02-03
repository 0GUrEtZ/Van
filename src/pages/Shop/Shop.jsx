import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import Products from './Products/Products';
import s from './shop.module.css'

const Shop = () => {
    const [product, setProduct] = useState([
        {
            data: {
                title: 'мать',
                price: 228,
                description: 'всем матерям мать',
                category: 'electronics'
            },
            id: 1
        }
    ])
    return (
        <div className={s.wrapper}>
            <Routes>
                <Route path='/' element={<Products product={product} setProduct={setProduct} />} />
                <Route path='Add/' element={<AddProduct product={product} setProduct={setProduct} />} />
            </Routes>
        </div>
    );
};

export default Shop;

import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import Products from './Products/Products';
import s from './shop.module.css'

const Shop = () => {
    const [product, setProduct] = useState([
        {
            id: 1,
            title: 'мать',
            price: 228,
            description: 'всем матерям мать',
            category: 'electronics'
        },
        {
            id: 2,
            title: 'мать',
            price: 228,
            description: 'всем матерям мать',
            category: 'electronics'
        },
        {
            id: 3,
            title: 'мать',
            price: 228,
            description: 'всем матерям мать',
            category: 'electronics'
        },
        {
            id: 4,
            title: 'мать',
            price: 228,
            description: 'всем матерям мать',
            category: 'electronics'
        },
        {
            id: 5,
            title: 'мать',
            price: 228,
            description: 'всем матерям мать',
            category: 'electronics'
        },
        {
            id: 6,
            title: 'мать',
            price: 228,
            description: 'всем матерям мать',
            category: 'electronics'
        },
        {
            id: 7,
            title: 'мать',
            price: 228,
            description: 'всем матерям мать',
            category: 'electronics'
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

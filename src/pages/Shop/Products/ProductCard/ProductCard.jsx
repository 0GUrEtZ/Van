import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../shop.module.css'

const ProductCard = ({ product, setProduct }) => {
    console.log(product)

    return (
        <div className={s.productList}>
            {
                product?.map((item) => (
                    <div className={s.card}>
                        <div>
                            {item.data?.title}
                        </div>
                        <div>
                            Цена: {item.data?.price}₽
                        </div>
                        <div>
                            {item.data?.description}
                        </div>
                    </div>
                ))
            }
        </div >
    );
}

export default ProductCard;

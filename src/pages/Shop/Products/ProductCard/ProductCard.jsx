import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../shop.module.css'

const ProductCard = ({ product, setProduct }) => {

    return (
        <div className={s.productList}>
            {
                product.map(item => (
                    <NavLink to={`${item.id}`} className={s.cardLink}>
                        <div className={s.card}>
                            <div>
                                {item.title}
                            </div>
                            <div>
                                Цена: {item.price}₽
                            </div>
                            <div>
                                {item.description}
                            </div>
                        </div>
                    </NavLink>
                ))
            }
        </div >
    );
}

export default ProductCard;

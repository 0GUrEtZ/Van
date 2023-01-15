import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../shop.module.css'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
    const { product, setProduct } = useForm();
    const add = ({ product, setProduct }) => {
        add(
            [...setProduct, {
                id: uuidv4(),
            }]
        )
        console.log(setProduct)
    }

    return (
        <div>
            <NavLink to='/shop'><div className={s.button}>shop</div></NavLink>
            <div className={s.addWrapper}>
                <div className={s.form}>
                    {/* <form onSubmit={setProduct(add)}>
                        <input {...setProduct("title")} />
                        <input {...setProduct("price")} />
                        <input {...setProduct("description")} />
                        <select {...setProduct("category")}>
                            <option value="electronics">electronics</option>
                            <option value="food">food</option>
                            <option value="other">other</option>
                        </select>
                        <input type="submit" />
                    </form> */}
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
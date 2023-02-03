import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../shop.module.css'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';
import { Controller } from 'react-hook-form';

const AddProduct = ({ product, setProduct }) => {
    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        setProduct(
            [...product, {
                id: uuidv4(),
                data: data
            }]
        )
        console.log(product)
    }

    return (
        <div>
            <NavLink to='/shop'><div className={s.button}>shop</div></NavLink>
            <div className={s.addWrapper}>
                <div className={s.form}>
                    <Controller
                        control={control}
                        name="title"
                        rules={{
                            required: { value: true, message: 'ti putin' }
                        }}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <input
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="price"
                        rules={{
                            pattern: { value: /^\d+$/, message: 'ti pidaras' },
                            required: { value: true, message: 'ti putin' }
                        }}
                        render={({
                            field: { onChange, value }, fieldState: { error }
                        }) => (
                            <><input
                                type={'numbers'}
                                onChange={onChange}
                                value={value}
                            /><div>{error?.message}</div></>
                        )}
                    />
                    <Controller
                        control={control}
                        name="description"
                        rules={{
                            required: { value: true, message: 'ti putin' }
                        }}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <textarea
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                    <button type='submit' onClick={handleSubmit(onSubmit)}>add</button>
                </div>
            </div>
        </div>

    );
}

export default AddProduct;
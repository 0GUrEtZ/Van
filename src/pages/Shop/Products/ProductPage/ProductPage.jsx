import React, { useState } from 'react';

const ProductPage = ({ product, setProduct }) => {

    return (
        <div>
            {
                product.map(item => (
                    <div>
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
                ))
            }
        </div >
    );
}

export default ProductPage;

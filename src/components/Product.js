import React from 'react';

export default ({ product }) => (
    <div className="product">
        <div className="product__wrap">
            <h2 className="product__title">{product.title}</h2>
            <img src={product.image_link} alt={product.title}/>
            <ul className="product__details">
                <li className="product__details_item">
                    Gtin: {product.gtin}
                </li>
                <li className="product__details_item">
                    Gender: {product.gender}
                </li>
                <li className="product__details_item">
                    Price: {product.price}
                </li>
                <li className="product__details_item">
                    Sale Price: {product.sale_price}
                </li>
            </ul>
        </div>
    </div>
);

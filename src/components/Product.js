import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product,openModal,clickable=true }) => (
    <div className="product">
        <div
        onClick={() => {
            if(clickable){
                openModal(product);
            }
        }}
        className="product__wrap">
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

Product.propTypes = {
    /** Product object */
    product: PropTypes.shape({
        gtin: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        image_link: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        sale_price: PropTypes.string.isRequired,
        additional_image_link: PropTypes.string
    }).isRequired,
    /** Whether or not click event triggers action */
    clickable: PropTypes.bool
}

export default Product;

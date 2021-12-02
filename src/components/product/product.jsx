import React, { useState, useEffect } from 'react';
import './product.css';
import Image from './images/image';

function Product({ product }) {
    return (
        <div className="product">
            <div className="imageblok">
                <p>
                    <img width="245px" height="300px" src={product?.url} />
                </p>
                <br />
                <div className="infobox_shop">
                    <p className="shop_text">
                        Naam: {product?.naam}
                    </p>
                    <p className="shop_text">
                        Prijs: {product?.prijs}
                    </p>
                    <button className="winkelmand2">winkelmand toevoegen</button>
                </div>
                <br />
            </div>
        </div>
    );
}

// handleIncrement = product => {
//     console.log(product);   
//     this.setState({ value: this.state.value + 1 })
// };
export default Product;
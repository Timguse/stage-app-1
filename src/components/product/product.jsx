import React from 'react'
import './product.css';
import Image from './images/image';
import useShop from "../../hooks/shop";



function Product() {
    
        return <div className="product">
            <div className="imageblok">
                <Image />
                <br/>
                <div className="infobox_shop">
                <p className="shop_text">{}</p>
            </div>
            <br/>
            </div>
        </div>;
    }


// handleIncrement = product => {
//     console.log(product);
//     this.setState({ value: this.state.value + 1 })
// };
export default Product;
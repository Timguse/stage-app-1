import React, { Component } from 'react'
import './product.css';
import Image from './images/image';

class Product extends Component {
    
    render() { 
        return <div className="product">
            <div className="imageblok">
                <Image />
            </div>
        </div>;
    }
}
 
export default Product;
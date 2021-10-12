import React, { Component } from 'react'
import tshirt1 from "../../../assets/images/tshirt1.jpg"

class ProductImage extends Component {
    render() { 
        return <div>
            <img src={tshirt1} width={100} height={100} alt="tshirt" />
        </div>;
    }
}
 
export default ProductImage;
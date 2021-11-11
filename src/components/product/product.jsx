import React, { Component } from 'react'
import './product.css';
import Image from './images/image';

class Product extends Component {
    
    render() { 
        return <div className="product">
            <div className="imageblok">
                <Image />
                {/* <button
                    onClick={() => this.handleIncrement({ id: 1 })}>+
                </button> */}
            </div>
        </div>;
    }
}

// handleIncrement = product => {
//     console.log(product);
//     this.setState({ value: this.state.value + 1 })
// };
export default Product;
import React, { Component } from 'react'
import './maincontainer.css';
import Product from './product/product'


class Maincontainer extends Component {
    render() {
        return <div className="maincontainer">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />

        </div>;
    }
}

export default Maincontainer;
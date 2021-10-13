import React, { Component } from 'react'
import './maincontainer.css';
import Product from './product/product'
import Gegevens from '../pages/gegevens';

class Maincontainer extends Component {
    render() {
        return <div className="maincontainer">
            {/* <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
            <Gegevens />

        </div>;
    }
}

export default Maincontainer;
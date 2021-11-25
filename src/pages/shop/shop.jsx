import React, {} from 'react';
import '../about/about';
import './shop.css';
import Product from '../../components/product/product';


function Shop() {
    return (
        <div>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
}

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>  <li>{number}</li>);
 
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>      {number}
//         </li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }
export default Shop;
//git checkout -b shop-listing







 



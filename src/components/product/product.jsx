import React, { useState, useEffect } from 'react'
import './product.css';
import Image from './images/image';
import useShop from "../../hooks/shop";



 function Product() {
    const {
        // loading,
        shopData,
        getShopData,
    } = useShop();

    const [ShowShopData, setShowShopData] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getShopData(false); // initial render
        console.log(shopData);
    }, []);


    return (
    <div className="product">
        <div className="imageblok">
            <Image />
            <br />
            <div className="infobox_shop">
                <p className="shop_text">
                    Prijs:{shopData} shirt
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
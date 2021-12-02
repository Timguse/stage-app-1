import React, { useState, useEffect } from 'react';
import '../about/about';
import './shop.css';
import Product from '../../components/product/product';
import useShop from "../../hooks/shop";

function Shop() {

    const {
        loading,
        shopData,
        getShopData,
    } = useShop();

    const [showWinkelData, setShowWinkelData] = useState(false);

    useEffect(() => {
        getShopData(false); // initial render-*/
        console.log(shopData);
    }, []);

    function toggleButtonWinkel() {
        setShowWinkelData((bool) => {
            return !bool;
        });
    }

    return (
        <div>
            {!showWinkelData && (
                <div className="blok">
                    <br/><br/><br/><br/>
                    <button className="hoi" onClick={toggleButtonWinkel}>verberg winkel</button>
                </div>
            )}
            {showWinkelData && (
                <div className="Winkel_shop" id="info">
                    <br/><br/><br/><br/>
                    <button className="hoi" onClick={toggleButtonWinkel}>naar winkel</button>

                </div>
            )}

            {loading && (
                shopData?.broeken.map((item) => <Product key={item.naam} product={item} />)
            )};

        </div>
    );
}

export default Shop;

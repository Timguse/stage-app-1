import React, { useState, useEffect } from 'react';
import "./card.css";
import Counters from '../../components/count/counters';
import useProfile from '../../hooks/Profile';



function Card() {
    const {
        // loading,
        profileData,
        getProfileData,
    } = useProfile();

    const [showPayData, setShowPayData] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getProfileData(false); // initial render
        console.log(profileData);
    }, []);
    function toggleButtonPayData2() {
        setShowPayData((bool) => {
            return !bool;
        });
    }
    return (
        <div>
            <div className="card_container">
                <br /><br /><br /><br />
                <div className="text_winkelmand">
                    <h1 className="title_card" >Welkom bij u winkelmand</h1>
                    <p className="product_card" id="product_card">edededded</p>
                    <div className="teller-blok">
                        <h2 className="producten_title">Producten</h2>
                        <Counters />
                    </div>
                    {!showPayData && (
                        <div className="blok2-card">
                            <h2 className="gegevens_title">Jouw gegevens</h2>
                            <br />
                            <p className="infotext">Naam: {profileData?.name}</p>
                            <p className="infotext">Email: {profileData?.email}</p>
                            <p className="infotext">Telefoonnummer: {profileData?.phone}</p>
                            <p className="infotext">Postcode: {profileData?.postcode}</p>
                            <p className="infotext">Address: {profileData?.address}</p>
                            <p className="infotext">Stad: {profileData?.city}</p>
                            <button className="togglebutton_card" onClick={toggleButtonPayData2}>Door naar afrekenen</button>
                        </div>
                    )}
                    {showPayData && (
                        <div className="blok2-card2" id="info">
                            <h2 className="gegevens_title">Afrekenen</h2>
                            <h3 className="prijs_title">Prijs:</h3>
                            <button className="togglebutton_card" onClick={toggleButtonPayData2}>Gegevens bekijken</button>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Card;



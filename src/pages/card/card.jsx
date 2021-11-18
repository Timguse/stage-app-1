import React from 'react';
import "./card.css";
import Counters from '../../components/count/counters';

function Card() {
    return (
        <div>
            <div className="card_container">
                <br/><br/><br/>
                <div className="text_winkelmand">
                <h1 className="title_card" >Welkom</h1>
                    <p className="product_card" id="product_card">edededded</p>
                    <Counters />
                </div>
            </div>
        </div>
    );
}
export default Card;



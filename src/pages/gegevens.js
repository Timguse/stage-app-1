import React, {  } from 'react';
import './gegevens.css';
import ProfileImage from './images/image';


function Gegevens() {
    return (
        <div>
            <div className="infobox"><br/>
                <div className="Profielpicture">
                        <ProfileImage />
                </div>
                <div className="tekstblok">
                    <h2>Naam:</h2>
                    <h3>Email:</h3>
                    <h3>tel:</h3>
                </div>
            </div>
            <div className="main">
                <div className="text_main">
                    <h1>Hoi</h1>
                </div>
            </div>
        </div>
    );
}


export default Gegevens;
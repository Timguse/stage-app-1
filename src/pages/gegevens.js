import React, {  } from 'react';
import './gegevens.css';
import ProfileImage from './images/image';
import LogOut from '../components/shared/button1';


function Gegevens() {

    const 
    Name = "Tim ",
    last_name = "Guse",
    email = "tguse@gmail.com",
    tel = "0654342321";

    return (
        <div>
            <div className="infobox"><br/>
                <div className="Profielpicture">
                        <ProfileImage />
                </div>
                <div className="tekstblok">
                    <h2 className="infotext">{Name + last_name}</h2>
                    <h3 className="infotext">{email}</h3>
                    <h3 className="infotext">{tel}</h3>
                </div>
            </div>
            <div className="main">
                <div className="text_main">
                    <LogOut />
                </div>
            </div>
        </div>
    );
}


export default Gegevens;
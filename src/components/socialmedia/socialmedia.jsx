import React from 'react';
import "./socialmedia.css";
import Facebook from "../../assets/images/facebook-icon.jpg";
import Instagram from "../../assets/images/instagram-iconpng.jpg";
import Linktin from "../../assets/images/linkedin-icon.jpg";
import Tiktok from "../../assets/images/tik-tok-icon.jpg";

function facebooksite(){
    window.location.href='https://www.facebook.com';
}
function instagramsite(){
    window.location.href='https://www.instagram.com';
}
function linktinsite(){
    window.location.href='https://www.linkedin.com';
}
function tiktoksite(){
    window.location.href='https://www.tiktok.com';
}


function Socialmedia() {
    return (
        <div>
            <img src={Facebook} className="socialmedia" 
            onClick={facebooksite} target="_blank"></img>
            <img src={Instagram} className="socialmedia" 
            onClick={instagramsite} target="_blank"></img>
            <img src={Linktin} className="socialmedia" 
            onClick={linktinsite} target="_blank"></img>
            <img src={Tiktok} className="socialmedia" 
            onClick={tiktoksite} target="_blank"></img>
        </div>

    );
}
export default Socialmedia;
import React from "react";
import "./footer.css";
import Socialmedia from "../socialmedia/socialmedia";

function Footer(){
    return (
        <div className="footer">
            <div className="footer-tekst">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus tristique ipsum, sit amet ullamcorper ex elementum in. Etiam scelerisque quam ac tortor auctor posuere. Nam quis tortor a felis accumsan porttitor. Nullam pulvinar interdum quam non eleifend. Vestibulum pretium vulputate diam. Nunc sollicitudin eros sit amet eros vulputate viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="footer-tekst">
            <h3>Bedrijf</h3>
                <p>Lorem adipiscing elit. In faucibus tristique ipsum, sit amet ullamcorper ex elementum in. Etiam scelerisque quam ac tortor auctor posuere. Nam quis tortor a felis accumsan porttitor. Nullam pulvinar interdum quam non eleifend. Vestibulum pretium vulputate diam. Nunc sollicitudin eros sit amet eros vulputate viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="footer-tekst">
            <h3>Brief</h3>
                <p>Lorem adipiscing elit. In faucibus tristique ipsum, sit amet ullamcorper </p>
                <input type="email" className="newsletter-footer" placeholder="email"></input>
                <button className="send-button-footer">send</button>
            </div>
            <div className="line-footer"></div><br/>
            <div className="social-footer">
        	    <Socialmedia />
                <p className="socialmedia-text">iewiiwefijow feijo ik ehuduh</p>
            </div>
        </div>
    );
}
export default Footer;
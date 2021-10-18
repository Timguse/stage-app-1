import React, {  } from 'react';
import './gegevens.css';
import ProfileImage from './images/image';
import Footer from '../components/footer/footer';
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
                    <h1>Welkom {Name}</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero ex, volutpat nec felis ac, imperdiet rutrum arcu. Nam volutpat viverra erat. Phasellus congue nisl at urna hendrerit dignissim. In pellentesque leo ac rhoncus dapibus. Duis quis aliquam nisi. Nullam tristique porttitor semper. Morbi non laoreet urna. Aliquam tincidunt, urna quis fermentum finibus, dui nisi vulputate ligula, vel sodales nunc ligula a nisi. Aenean et mattis metus. Donec sit amet nisi ac augue convallis convallis id at odio. Ut pulvinar urna iaculis diam pretium scelerisque. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Praesent porta commodo scelerisque. Phasellus ac posuere magna.
                    </p>
                </div>
            </div><br />
            <Footer />
        </div>
    );
}


export default Gegevens;
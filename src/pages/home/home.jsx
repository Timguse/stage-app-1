import React from "react";
import './home.css';
import Profilefoto from "../../assets/images/mountains.jpg";
import Contactform from "../../components/contact/contactform";
import Contactbutton from "../../components/shared/Authentication/contactbutton.jsx";

function Home() {
    return (
        <div>
            <div className="section1">
                <br />
                <h1 className="section1-titel">Welkom</h1>
                <p className="section1-tekst">uhuhfuhwef uh fehufweiwefuh hwfeu efwh <br /> iwefuh hwfeu efwh</p>
                <Contactbutton />
            </div>
            <div className="section2" id="section2">
                <div className="image-container">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src={Profilefoto} alt="Cinque Terre" width="800" height="400" />
                        </a><br/>
                        <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                        <a target="_blank" href="img_forest.jpg">
                            <img src={Profilefoto} alt="Forest" width="800" height="400" />
                        </a><br/>
                        <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                        <a target="_blank" href="img_lights.jpg">
                            <img src={Profilefoto} alt="Northern Lights" width="800" height="400" />
                        </a><br/>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
            </div>
            <div className="section3" id="section3">
                <div className="section3_text">
                    <br/>
                <p className="section1-titel">Contact</p>
                <p className="section1-tekst">uhuhfuhwef uh fehufweiwef <br /> iwefuh</p>
                
                </div>
                <Contactform/>
            </div>
        </div>
    );
    
}
export default Home;
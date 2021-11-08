import React, { Component } from 'react'
import Profilefoto from "../../assets/images/foto_persoon_hooft.jpg";
import "./image.css";

class ProfileImage extends Component {
    render() { 
        return <div>
            <img src={Profilefoto} width={200} height={200} alt="Profielfoto" className="profielfoto"/>
        </div>;
    }
}
 
export default ProfileImage;
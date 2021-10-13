import React, { Component } from 'react'
import Profilefoto from "../../assets/images/profielfoto.png"

class ProfileImage extends Component {
    render() { 
        return <div>
            <img src={Profilefoto} width={150} height={150} alt="Profielfoto" className="profielfoto"/>
        </div>;
    }
}
 
export default ProfileImage;
import React, { useState } from 'react';
import './about.css';
//import ProfileImage from './images/image';
import Footer from '../../components/footer/footer';
import LogOut from '../../components/shared/Authentication/LogoutButton';
import Info from '../../components/info/info';
import { FaBeer } from 'react-icons/fa';

import useProfile from '../../hooks/Profile';

function Gegevens() {
    const {
        // loading,
        profileData,
        getProfileData,
      } = useProfile();

    const [showProfileData, setShowProfileData] = useState(false);
    const [loading, setLoading] = useState(true);

    const name = "Tim";

    // useeffect moet hier komen

    setTimeout(() => {
        setLoading(false);
    }, 3 * 1000);

    if (loading) {
        return <p>page is loading...</p>
    };

    function toggleButtonProfileData() {
        setShowProfileData((bool) => {
            return !bool;
        })
    }

    return (
        <div>
            {showProfileData && (
                <div className="infobox" id="info">
                    <Info />
                    <br />
                </div>
            )}
             {!showProfileData && (
                <div className="infobox2" id="info">
                    <h3> Lets go for a <FaBeer />? </h3>
                    <br />
                </div>
            )}
            <div className="main">
                <div className="text_main">
                    <LogOut />
                    <h1>Welkom {name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero ex, volutpat nec felis ac, imperdiet rutrum arcu. Nam volutpat viverra erat. Phasellus congue nisl at urna hendrerit dignissim. In pellentesque leo ac rhoncus dapibus. Duis quis aliquam nisi. Nullam tristique porttitor semper. Morbi non laoreet urna. Aliquam tincidunt, urna quis fermentum finibus, dui nisi vulputate ligula, vel sodales nunc ligula a nisi. Aenean et mattis metus. Donec sit amet nisi ac augue convallis convallis id at odio. Ut pulvinar urna iaculis diam pretium scelerisque. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Praesent porta commodo scelerisque. Phasellus ac posuere magna.
                    </p>
                    <button onClick={toggleButtonProfileData}>klik</button>
                    <a href="#main2">main2</a>
                </div>
            </div><br />
            <Footer />
        </div >
    );

}
export default Gegevens;

import React, { useState, useEffect } from "react";
import "./about.css";
import Footer from "../../components/footer/footer";
import LogOut from "../../components/shared/Authentication/LogoutButton";
import Info from "../../components/info/info";
import useProfile from "../../hooks/Profile";
import mauntains from "../../assets/images/mountains.jpg";
import Contactbutton from "../../components/shared/Authentication/contactbutton";
//import ProfileService from "../../services/ProfileService";

function Gegevens() {
    const {
        // loading,
        profileData,
        getProfileData,
    } = useProfile();

    const [showProfileData, setShowProfileData] = useState(false);
    const [loading, setLoading] = useState(false);

    const name = "Tim";

    useEffect(() => {
        getProfileData(false); // initial render
    }, []);

    if (loading) {
        return <p>page is loading...</p>;
    };

    function toggleButtonProfileData() {
        setShowProfileData((bool) => {
            return !bool;
        });
    }

    return (
        <div>
            {showProfileData && (
                <div className="infobox" id="info">
                    <Info data={profileData} />
                    
                </div>
            )}
            {!showProfileData && (
                <div className="infobox2" id="info">
                </div>
            )}
            <div className="main">
                <div className="text_main">
                    <h1 className="maintext">Hoi <br/>Ik ben {Gegevens.showProfileData}</h1>
                    <button onClick={toggleButtonProfileData} className="button_gegevens">Mijn Gegevens</button><br/><br/>
                    <Contactbutton/>
                </div> 
            </div>
        </div >
    );
}
export default Gegevens;
             
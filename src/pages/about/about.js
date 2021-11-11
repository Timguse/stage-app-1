import React, { useState, useEffect } from "react";
import "./about.css";
import useProfile from "../../hooks/Profile";
import Contactbutton from "../../components/shared/Authentication/contactbutton";
import ProfileImage from "../images/image";

function Gegevens() {
    const {
        // loading,
        profileData,
        getProfileData,
    } = useProfile();

    const [showProfileData, setShowProfileData] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getProfileData(false); // initial render
        console.log(profileData)
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
                   <div className="Profielpicture">
                <ProfileImage />
            </div>      
            <div className="tekstblok">
                <h2 className="infotext">{profileData?.name}</h2>
                <h3 className="infotext">{profileData?.email}</h3>
                <h3 className="infotext">{profileData?.phone}</h3>
                <h3 className="infotext">{profileData?.postcode}</h3>
                <h3 className="infotext">{profileData?.address}</h3>
                <h3 className="infotext">{profileData?.city}</h3>

                <button onClick={toggleButtonProfileData} className="button_verbergen">Gegevens verbergen</button>
            </div>
                </div>
            )}
            {!showProfileData && (
                <div className="infobox2" id="info">
                </div>
            )}
            <div className="main">
                <div className="text_main">
                    <h1 className="maintext">Hoi <br />Ik ben {profileData?.name || "unknown"}</h1>
                    <button onClick={toggleButtonProfileData} className="button_gegevens">Mijn Gegevens</button><br /><br />
                    <Contactbutton />
                </div>
            </div>
        </div >
    );
}
export default Gegevens;

import React, {  } from 'react'
import "./LogoutButton.css";
 
function LogOut(){
    return (
        <div>
            <button className="Logout" onClick={uitloggen}>Uitloggen</button>
        </div>
    );

    function uitloggen(){
        alert ("Kan niet uitloggen");
    }
}
export default LogOut;
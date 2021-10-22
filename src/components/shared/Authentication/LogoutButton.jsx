import React, {  } from 'react'
import "./LogoutButton.css";
import Button from '@mui/material/Button';

function LogOut(){
    return (
        <div>
            <Button variant="contained" onClick={uitloggen}>Uitloggen</Button>
        </div>
    );

    function uitloggen(){
        alert ("Kan niet uitloggen");
    }
}
export default LogOut; 
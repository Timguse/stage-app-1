import React from 'react';
import './contactbutton.css';



function Contactbutton() {
    return(
        <div>
            <button onClick={handleButton} className="Contact-button">Contact</button>
        </div>
    );
}
function handleButton(){ 
    alert= "hoi";
}

export default Contactbutton;
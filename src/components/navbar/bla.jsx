import React from "react";
import { Link } from 'react-router-dom'
import "./bla.css"

function Bla() {
    return (
        <div className="Topnav" id="myTopnav">
            <br />
            <thead>
                <tr>
                    <Link to="/" className="active">
                        <td>Home</td>
                    </Link>
                    <Link to="/shop">
                        <td>Shop</td>
                    </Link>
                    <Link to="/Gegevens">
                        <td className="Gegevens">Gegevens</td>
                    </Link>
                    <a href="javascript:void(0);" className="icon" onClick={this.myFunction}></a>
                    <i class="fa fa-bars"></i>
                </tr>
            </thead>
        </div>   
    );
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
}
export default Bla;
import React from "react";
import { Link } from 'react-router-dom'

function bla() {
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
                    </tr>
                </thead>
            </div>
           
            
    );
}
export default bla;
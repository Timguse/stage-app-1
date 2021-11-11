import React, { Component } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import winkelmand from "../../assets/images/winkelmand.jpg";

class Navbar extends Component {
    render() {
        return <div>
            <nav className="navbar">
            <br />
                <thead>
                    <tr>
                        <br />
                        <Link to="/">
                            <td>Home</td>
                        </Link>
                        <Link to="/shop">
                            <td>Shop</td>
                        </Link>
                        <Link to="/Gegevens">
                            <td className="Gegevens">Gegevens</td>
                        </Link>
                        <Link to="/card">
                            <img src={winkelmand} width={"30px"} className="winkelmand"></img>
                        </Link>
                    </tr>
                </thead>
            </nav>
        </div >;
    }
};
export default Navbar;
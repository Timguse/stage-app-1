import React, { Component } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return <div>
            <nav className="navbar">
                <br />
                <thead>
                    <tr>
                        <Link to="/">
                            <td>Home</td>
                        </Link>
                        <Link to="/shop">
                            <td>Shop</td>
                        </Link>
                        <Link to="/Gegevens">
                            <td>Gegevens</td>
                        </Link>
                    </tr>
                </thead>
            </nav>


        </div >;
    }
};
export default Navbar;
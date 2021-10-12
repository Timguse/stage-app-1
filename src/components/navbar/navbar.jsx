import React, { Component } from 'react'
import './navbar.css';


class Navbar extends Component {
    render() { 
        return <div>
            <nav className="navbar">
                <br />
                <thead>
                    <tr>
                        <td><a href="index.js">Home</a></td>
                        <td><a href="index.js">Media</a></td>
                        <td><a href="index.js">Info</a></td>
                        <td><a href="index.js">Contact</a></td>
                    </tr>
                </thead>
            </nav>
        </div>;
    }
}
export default Navbar;
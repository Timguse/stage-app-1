import React, { Component } from 'react'
import './maincontainer.css';
import Shop from '../pages/shop';
import Navbar from './navbar/navbar';
import Gegevens from '../pages/gegevens';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Maincontainer extends Component {
    render() {
        return (
            <Router>
                <div className="maincontainer">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Gegevens" component={Info} />
                        <Route path="/shop" exact component={shop} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
const Home = () => (
    <div>
        <h1>hoi</h1>
    </div>
);
const Info = () => (
    <div>
        <Gegevens />
    </div>
);
const shop = () => (
    <div>
        <Shop />
    </div>
);

export default Maincontainer;
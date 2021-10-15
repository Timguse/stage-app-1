import React, { Component } from 'react'
import './maincontainer.css';
import Shop from '../pages/shop';
import Navbar from './navbar/navbar';
import Gegevens from '../pages/gegevens';
import Home from '../pages/home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Maincontainer extends Component {
    render() {
        return (
            <Router>
                <div className="maincontainer">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={home} />
                        <Route path="/Gegevens" component={Info} />
                        <Route path="/shop" exact component={shop} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
const home = () => (
    <div>
        <Home/>
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
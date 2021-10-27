import React, { Component } from 'react';
import './maincontainer.css';
import Shop from '../pages/shop/shop';
import Navbar from './navbar/navbar';
import Gegevens from '../pages/about/about';
import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import Bla from './navbar/bla';

class Maincontainer extends Component {
    render() {
        return (
            <Router>
                <div className="maincontainer">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={home} />
                        <Route path="/Gegevens" component={Infopage} />
                        <Route path="/shop" exact component={shop} />
                        <Route path="/contact" exact component={contactpage} />
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
const Infopage = () => (
    <div>
        <Gegevens />
    </div>
);
const shop = () => (
    <div>
        <Shop />
    </div>
);
const contactpage = () => (
    <div>
        <Contact />
    </div>
);


export default Maincontainer;
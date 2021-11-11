import React, { Component } from 'react';
import './maincontainer.css';
import Shop from '../pages/shop/shop';
import Navbar from './navbar/navbar';
import Gegevens from '../pages/about/about';
import Card from '../pages/card/card';
import Home from '../pages/home/home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './footer/footer';
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
                        <Route path="/card" exact component={card} />
                    </Switch>
                    <Footer/>
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
const card = () => (
    <div>
        <Card />
    </div>
);



export default Maincontainer;
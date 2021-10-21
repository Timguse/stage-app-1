import React from "react";
import './home.css';

function Home() {
    return (
        <div>
            <div className="section1">
                <h1>Welkom bij section 1</h1>
                <a href="#section2" className="section-link">section 2</a>
            </div>
            <div className="section2" id="section2">
                <h1>Welkom bij section 2</h1>
                <a href="#section3" className="section-link">section 3</a>
            </div>
            <div className="section3" id="section3">
                <h1>Welkom bij section 3</h1>
            </div>
        </div>
    );
}
export default Home;
import React from "react";
import "./media.css";

function Media() {
    return (
        <div>
            <div className="header">
                <h1>Responsive Image Grid</h1>
                <p>Resize the browser window to see the responsive effect.</p>
            </div>

            <div className="row">
                <div className="column">
                    <img src="/w3images/wedding.jpg" style="width:100%" />
                    <img src="/w3images/rocks.jpg" style="width:100%" />
                    <img src="/w3images/falls2.jpg" style="width:100%" />
                    <img src="/w3images/paris.jpg" style="width:100%" />
                    <img src="/w3images/nature.jpg" style="width:100%" />
                    <img src="/w3images/mist.jpg" style="width:100%" />
                    <img src="/w3images/paris.jpg" style="width:100%" />
                </div>
                <div className="column">
                    <img src="/w3images/underwater.jpg" style="width:100%" />
                    <img src="/w3images/ocean.jpg" style="width:100%" />
                    <img src="/w3images/wedding.jpg" style="width:100%" />
                    <img src="/w3images/mountainskies.jpg" style="width:100%" />
                    <img src="/w3images/rocks.jpg" style="width:100%" />
                    <img src="/w3images/underwater.jpg" style="width:100%" />
                </div >
                <div className="column" />
                <img src="/w3images/wedding.jpg" style="width:100%" />
                <img src="/w3images/rocks.jpg" style="width:100%" />
                <img src="/w3images/falls2.jpg" style="width:100%" />
                <img src="/w3images/paris.jpg" style="width:100%" />
                <img src="/w3images/nature.jpg" style="width:100%" />
                <img src="/w3images/mist.jpg" style="width:100%" />
                <img src="/w3images/paris.jpg" style="width:100%" />
            </div >
            <div className="column">
                <img src="/w3images/underwater.jpg" style="width:100%" />
                <img src="/w3images/ocean.jpg" style="width:100%" />
                <img src="/w3images/wedding.jpg" style="width:100%" />
                <img src="/w3images/mountainskies.jpg" style="width:100%" />
                <img src="/w3images/rocks.jpg" style="width:100%" />
                <img src="/w3images/underwater.jpg" style="width:100%" />
            </div>
        </div>
    );
}
export default Media;
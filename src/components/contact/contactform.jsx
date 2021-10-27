import React, {} from 'react';
import "./contact.css";

function Contactform() {
    return (
        <div>
            <div className="container">
            <h3 className="contact-text">Contact form</h3>
                <form>
                    <label>First Name</label>
                    <input type="text" id="fname" name="voornaam" placeholder="voornaam.." />

                    <label>Last Name</label>
                    <input type="text" id="lname" name="achternaam.." placeholder="achternaam.." />

                    <label>Country</label>
                    <select id="country" name="country">
                        <option value="australia">A</option>
                        <option value="canada">B</option>
                        <option value="usa">C</option>
                    </select>

                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Bericht.."></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}
export default Contactform;
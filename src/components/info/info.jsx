import React from 'react'
import ProfileImage from '../../pages/images/image';
import '../../pages/about/about';

const
    Name = "Tim ",
    last_name = "Guse",
    email = "tguse@gmail.com",
    tel = "0654342321";

function Info() {
    return (
        <div>
            <div className="Profielpicture">
                <ProfileImage />
            </div>
            <div className="tekstblok">
                <h2 className="infotext">{Name + last_name}</h2>
                <h3 className="infotext">{email}</h3>
                <h3 className="infotext">{tel}</h3>
            </div>
        </div>
    );
}
export default Info;

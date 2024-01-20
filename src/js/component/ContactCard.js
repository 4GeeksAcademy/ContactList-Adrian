import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


export const ContactCard = (props) => {
    const { image, name, mail, address, phone } = props; 

    return (
        <div className="col-12 d-flex  w-75 ContactCard">
            <div className="imagen col-4">
                <img src={image} className="fotoperfil" alt="Contact" />
            </div>
            <div className="info col-6">
                <h4 className="text-start">{name}</h4>
                <p className="text-start">{mail}</p>
                <p className="text-start">{address}</p>
                <p className="text-start">{phone}</p>
            </div>
            <div className="botones col-2 text-end d-flex inline">

                <button className="btn btn-danger w-100"> DELETE </button>

            </div>
        </div>
    );
};

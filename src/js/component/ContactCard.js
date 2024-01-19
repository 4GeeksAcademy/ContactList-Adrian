import React from "react";

export const ContactCard = (props) => {
    const { image, name, mail, address, phone } = props; 

    return (
        <div className="col-12 d-flex border w-75 ContactCard">
            <div className="imagen col-4">
                <img src={image} className="fotoperfil" />
            </div>
            <div className="info col-6">
                <h4 className="text-start">{name}</h4>
                <p className="text-start">{mail}</p>
                <p className="text-start">{address}</p>
                <p className="text-start">{phone}</p>
            </div>
            <div className="botones col-2 text-end d-flex inline">
                <p className="p-3">A</p>
                <p className="p-3">X</p>
            </div>
        </div>
    );
};

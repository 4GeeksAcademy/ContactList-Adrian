// ContactCard.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ contact, onDeleteContact }) => {
  const { actions } = useContext(Context);
  return (
    <div className="col-4 " >
      
      <div className=" p-3 border border-1 mt-3 rounded bg-primary text-white contactoHover">

      <div className="text-end">
          <Link
            to={`/updateContact`}
            className="btn btn-success me-3"
            onClick={() => {
              actions.seeContact(contact);
            }}
          >
           EDIT
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteContact(contact.id)}
          >
            X
          </button>
        </div>
        <h2 className="display-3 text-center">{contact.full_name}</h2>
        <h5 className="text-center">
          <i className="fa-solid fa-location-dot me-2"></i>
          {contact.address}
        </h5>
        <h5 className="text-center">
          <i className="fa-solid fa-phone me-2"></i>
          {contact.phone}
        </h5>
        <h5 className="text-center">
          <i className="fa-solid fa-envelope me-2"></i>
          {contact.email}
        </h5>
       
      </div>
    </div>
  );
};

export default ContactCard;

import React from "react";

export const ContactCard = (props) => {
  return (
    <div className="col-12 d-flex w-75 ContactCard mt-2">
      <div className="info col-6">
        <h4 className="text-start">{props.name}</h4>
        <p className="text-start">{props.email}</p>
        <p className="text-start">{props.address}</p>
        <p className="text-start">{props.phone}</p>
      </div>
      <div className="botones col-2 text-end d-flex inline">
        <button
          className="btn btn-danger w-100"
          onClick={props.onDelete}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

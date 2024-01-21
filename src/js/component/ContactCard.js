import React from "react";

export const ContactCard = (props) => {
  return (
    <div className="col-12 d-flex w-75 ContactCard mt-2 ">
      <div className="info col-10 text-black bg-light">
        <h4 className="text-start ps-2">{props.name}</h4>
        <p className="text-start  ps-2">{props.email}</p>
        <p className="text-start ps-2">{props.address}</p>
        <p className="text-start ps-2">{props.phone}</p>
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

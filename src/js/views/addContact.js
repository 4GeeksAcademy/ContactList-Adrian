// AddContact.js
import React, { useState } from "react";

export const AddContact = ({ onAddContact, putContacts }) => {
  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleAddContact = () => {
    onAddContact(contactData);
    putContacts(contactData);
    setContactData({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div className="text-center w-25 AddContact">
      <div className="p-2">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            name="name"
            value={contactData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="email"
            value={contactData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              aria-describedby="basic-addon3"
              name="address"
              value={contactData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              aria-describedby="basic-addon3"
              name="phone"
              value={contactData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button className="btn btn-primary w-100" onClick={handleAddContact}>
          ADD CONTACT
        </button>
      </div>
    </div>
  );
};

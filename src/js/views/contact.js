import React, { useState } from "react";
import { AddContact } from "./addContact.js";
import { ContactCard } from "../component/ContactCard.js";
import "../../styles/home.css";

export const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    // Agregar el nuevo contacto al estado
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (index) => {
    // Filtrar los contactos excluyendo el que se va a eliminar
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="text-center mt-5">
         {/* Renderizar el formulario de AddContact y pasar la función addContact como prop */}
      <AddContact onAddContact={addContact} />
         {/* Renderizar la lista de contactos */}
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          {...contact}
          onDelete={() => deleteContact(index)}
        />
      ))}


      
    </div>
  );
};

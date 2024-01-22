import React, { useContext, useState } from "react";
import { AddContact } from "./addContact.js";
import { ContactCard } from "../component/ContactCard.js";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const {store, actions} = useContext(Context)
  console.log("store",store.contacts)
  
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
    <div className="text-center mt-2">
         {/* Renderizar el formulario de AddContact y pasar la función addContact como prop */}
      <AddContact onAddContact={addContact} />
         {/* Renderizar la lista de contactos */}
      {store.contacts.map((contact, index) => (
        <ContactCard
          key={index}
          {...contact}
          onDelete={() => deleteContact(index)}
        />
      ))}


      
    </div>
  );
};

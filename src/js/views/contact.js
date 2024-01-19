
import React from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";

export const Contact = () => (
    <div className="text-center mt-5">
        <ContactCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG14LEpKnC6bt0ghvtUtNcwOiSSThF0P3pA&usqp=CAU"
            name="Nombre del contacto"
            mail="correo@ejemplo.com"
            address="Dirección del contacto"
            phone="123-456-7890"
        />
        Hola desde Contactos
    </div>
);

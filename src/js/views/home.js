import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center Titular TitularX">
		<h1 className="display-1 fw-bold">Adrian Rios Ruiz</h1>
		<Link className="display-5" to="/contact">
			<h4>Check your Contacts</h4>
		</Link>
	</div>
);

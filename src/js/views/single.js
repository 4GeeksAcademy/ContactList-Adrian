import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Contact } from "./contact";
export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<div className="jumbotron bg-black text-white">
				<h1 className="display-4 text-center  bg-black text-white">
					{" "}
					{store.demo[params.theid].title}
				</h1>

				<Contact></Contact>

				
			</div>
			
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object,
};

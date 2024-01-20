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
			<div className="jumbotron ">
				<h1 className="display-4 text-center">
					{" "}
					{store.demo[params.theid].title}
				</h1>

				<Contact></Contact>

				<hr className="my-4" />
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg ms-5" href="#" role="button">
					Back home
				</span>
			</Link>
			<Link to="/AddContact">
				<button className="btn btn-secondary btn-lg ms-5">AddContact</button>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object,
};

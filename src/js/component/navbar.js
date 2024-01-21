import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1  ms-3">PLAYING WITH FLUX</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
				<button className="btn btn-secondary me-3">Home</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-secondary me-3">Check your box</button>
				</Link>
			</div>
		</nav>
	);
};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container bg-black text-white">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between  bg-black text-white"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Check your {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				
				<button className="btn btn-primary">Back home</button>
			</Link>
			
		</div>
	);
};

import React from "react";
import "./PopUpContainer.css";

/*

Expected Props:

children: PopUps

*/

function PopUpContainer(props) {
	return (
		<>
			<div className={props.visible ? "popUpOverlay active" : "popUpOverlay"} ></div>
			{props.children}
		</>
	);
}

export default PopUpContainer;
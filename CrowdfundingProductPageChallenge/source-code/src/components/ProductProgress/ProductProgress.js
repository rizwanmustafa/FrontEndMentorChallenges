import React from "react";
import "./ProductProgress.css";

/*

Expected Props:

moneyRaised: number,
moneyNeeded: number,
totalBackers: number,
daysLeft: number

*/


function ProductProgress(props) {
	// Format numbers
	const moneyRaised = props.moneyRaised.toLocaleString("en-US");
	const moneyNeeded = props.moneyNeeded.toLocaleString("en-US");
	const totalBackers = props.totalBackers.toLocaleString("en-US");

	// Calculate the percentage for the progress bar
	const progressPercentage = Math.min(
		Math.floor((props.moneyRaised / props.moneyNeeded) * 100),
		100
	).toString() + "%";


	return (
		<div className="productProgress">

			<div className="infoDivParent">

				<div className="infoDiv">
					<span className="infoHeading">${moneyRaised}</span>
					<span className="infoTxt">of ${moneyNeeded} backed</span>
				</div>

				<div className="verticalLine"></div>

				<div className="infoDiv midDiv">
					<span className="infoHeading">{totalBackers}</span>
					<span className="infoTxt">total backers</span>
				</div>

				<div className="verticalLine"></div>

				<div className="infoDiv">
					<span className="infoHeading">{props.daysLeft}</span>
					<span className="infoTxt">days left</span>
				</div>

			</div>

			<div>

				<div className="progressBar">
					<div className="progress" style={{ width: progressPercentage, }}></div>
				</div>

			</div>

		</div>
	);
}

export default ProductProgress;
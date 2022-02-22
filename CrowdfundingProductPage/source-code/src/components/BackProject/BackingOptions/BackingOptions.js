import React, { useState } from "react";
import "./BackingOptions.css";

/*

Expected Props:
setSelectedReward: function. Set this to current reward when user clicks it
selectedReward: string. If same then check, else not
rewardName: string. If null then "Pledge with no reward"
rewardDescription: string. Tells user what the reward will be
minPledgeAmount: number,
stockQuantity: number. If 0 then disable
setPledgeSuccessful: function. Set this to true to show the successful dialogue
*/

function BackingOptions(props) {
	let [pledgeAmount, setPledgeAmount] = useState(props.minPledgeAmount);

	function HandlePledgeAmountChange(event) {
		let value = event.target.value;
		// Restrict input to numbers only
		value = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
		setPledgeAmount(value);
	}

	function HandleButtonClick(event) {
		event.preventDefault();
		if (pledgeAmount >= props.minPledgeAmount) {
			// Only submit pledge when the pledge amount is appropriate
			props.setPledgeSuccessful(true);
		}
	}

	function HandleRewardChange() {
		if (props.stockQuantity !== 0)
			props.setSelectedReward(props.rewardName);
	}

	const activeStyles = {
		display: "flex",
		maxHeight: 500,
		paddingTop: 20
	};

	return (
		<div className={props.stockQuantity === 0 ? "backingOption disabled" :
			props.selectedReward === props.rewardName ?
				"backingOption active" : "backingOption"}
			onClick={HandleRewardChange}>
			<div>
				<input
					type="radio"
					name="backingOption"
					value={props.rewardName}
					checked={props.selectedReward === props.rewardName ? true : false}
					onChange={HandleRewardChange}
					disabled={props.stockQuantity === 0}
				/>

				<div>

					<div className="topDiv">

						<div className="mainInfo">

							<h3 className="rewardName">
								{props.rewardName === "" ?
									"Pledge with no reward" : props.rewardName}
							</h3>
							<span className="pledgeTxt">Pledge ${props.minPledgeAmount} or more</span>

						</div>

						{props.rewardName === "" ?
							null :
							<span>
								<span className="stockQuantity">{props.stockQuantity}</span> left</span>}

					</div>

					<p className="rewardDescription">{props.rewardDescription}</p>
				</div>
			</div>

			<div
				className="activeOnSelect"
				style={props.selectedReward === props.rewardName ?
					activeStyles : null}>
				<span>Enter your pledge</span>

				<div>
					<label className="currencySymbol">$</label>
					<input value={pledgeAmount} onChange={HandlePledgeAmountChange} type="text" />
					<button onClick={HandleButtonClick} className="submitPledgeBtn">Continue</button>
				</div>
			</div>
		</div>
	);
}

export default BackingOptions;
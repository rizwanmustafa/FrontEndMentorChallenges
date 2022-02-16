import React, { useState } from "react";
import BackingOptions from "./BackingOptions/BackingOptions";
import "./BackProject.css";

/*

Expected Props:

selectedReward: string, This contains the selected option by the user
setSelectedReward: function, This is to be used when the form changes the option
setVisibility: function, This is to set the visibilty of the form

*/

// Later import the close image

function BackProject(props) {

	let [pledgeSuccessful, setPledgeSuccessful] = useState(false);

	function HidePopUp(event) {
		event.preventDefault();
		props.setVisibility(false);
		setPledgeSuccessful(false);
	}

	if (!pledgeSuccessful)
		return (
			<form className="popUp" id="backProjectForm">
				<button className="closeFormBtn" onClick={HidePopUp}>

					<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fill-rule="evenodd" opacity=".4" />
					</svg>

				</button>

				<h2>Back this project</h2>

				<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

				<BackingOptions
					setSelectedReward={props.setSelectedReward}
					selectedReward={props.selectedReward}
					rewardName=""
					rewardDescription="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
					minPledgeAmount={1}
					stockQuantity={null}
					setPledgeSuccessful={setPledgeSuccessful}
				/>

				<BackingOptions
					setSelectedReward={props.setSelectedReward}
					selectedReward={props.selectedReward}
					rewardName="Bamboo Stand"
					rewardDescription="You get and ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
					minPledgeAmount={25}
					stockQuantity={101}
					setPledgeSuccessful={setPledgeSuccessful}
				/>

				<BackingOptions
					setSelectedReward={props.setSelectedReward}
					selectedReward={props.selectedReward}
					rewardName="Black Edition Stand"
					rewardDescription="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included"
					minPledgeAmount={75}
					stockQuantity={64}
					setPledgeSuccessful={setPledgeSuccessful}
				/>


				<BackingOptions
					setSelectedReward={props.setSelectedReward}
					selectedReward={props.selectedReward}
					rewardName="Mahogany Special Edition"
					rewardDescription="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
					minPledgeAmount={200}
					stockQuantity={0}
					setPledgeSuccessful={setPledgeSuccessful}
				/>
			</form >
		);

	else
		return (
			<form className="popUp successForm">

				<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fill-rule="evenodd">
						<circle fill="#3CB3AB" cx="32" cy="32" r="32" />
						<path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24" />
					</g>
				</svg>

				<h2>Thanks for your support!</h2>
				<p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>

				<button onClick={HidePopUp}>Got it</button>

			</form>
		);
}

export default BackProject;
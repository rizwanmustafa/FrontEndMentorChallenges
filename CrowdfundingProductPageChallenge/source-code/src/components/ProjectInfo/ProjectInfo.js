import React, { useState } from "react";
import "./ProjectInfo.css";

/*

Expected Props:

projectLogo: image,
projectName: string,
projectDescription: string,
backProject: function

*/

function ProjectInfo(props) {
	let [bookMarked, setBookMarkStatus] = useState(false);

	function ToggleBookmark() {
		setBookMarkStatus(!bookMarked);
	}

	return (
		<div className="projectInfo">

			<div className="floatingImg">
				<img src={props.projectLogo} alt="" />
			</div>

			<div>
				<h1>{props.projectName}</h1>
				<p>{props.projectDescription}</p>
			</div>

			<div className="btnDiv">
				<button className="backProjectBtn" onClick={props.backProject}>Back this project</button>
				<button className={bookMarked ? "bookmarkBtn active" : "bookmarkBtn"} onClick={ToggleBookmark}>
					<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fill-rule="evenodd">
							<circle fill="#2F2F2F" cx="28" cy="28" r="28" />
							<path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
						</g>
					</svg>
					<span>{bookMarked ? "Bookmarked" : "Bookmark"}</span>
				</button>
			</div>
		</div>
	);
}

export default ProjectInfo;
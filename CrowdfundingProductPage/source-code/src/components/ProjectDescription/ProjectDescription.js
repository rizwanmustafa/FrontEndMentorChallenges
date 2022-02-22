import React from "react";
import "./ProjectDescription.css";
/*

Expected Props:

children: Children Paragraph Elements which contain project description

*/

function ProjectDescription(props) {
	return <div className="projectDescription">
		<h2>About this project</h2>
		{props.children}
	</div>;
}

export default ProjectDescription;
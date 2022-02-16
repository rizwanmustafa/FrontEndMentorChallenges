import React from "react";
import "./ContentBox.css";

/*

Expected Props:

children: Children Elements

*/

function ContentBox(props) {
	return (
		<article className="contentBox">
			{props.children}
		</article>
	);
}

export default ContentBox;
import React, { useState } from "react";
import "./Header.css";
import companyLogo from "../../images/companyLogo.svg"; // Import the logo
import hamburgerIcon from "../../images/hamburgerIcon.svg";
import closeMenuIcon from "../../images/closeMenuIcon.svg";


/*

Expected Props:

menuItms: Array of strings that contain the menu items

*/

function Header(props) {
	let [menuToggled, setMenuToggle] = useState(false);

	function ToggleMenu() {
		setMenuToggle(!menuToggled);
	}

	return (
		<header>

			<nav>

				<a href="#" className="logoDiv">
					<img src={companyLogo} alt="" />
				</a>

				<div className="menuDiv" style={menuToggled ? { maxHeight: "1000px", } : null}>

					{props.menuItms.map((menuItm, index) => {
						if (index === 0)
							return <a className="menuItm" href="#" key={index}>{menuItm}</a>;
						else return (
							<>
								<hr className="menuSeparator" key={index + "hr"} />
								<a className="menuItm" href="#" key={index}>{menuItm}</a>
							</>
						);
					})}

				</div>

				<div className="menuToggler" onClick={ToggleMenu}>
					{menuToggled ?
						<img src={closeMenuIcon} alt="" /> :
						<img src={hamburgerIcon} alt="" />}
				</div>

			</nav>

		</header>
	);
}

export default Header;
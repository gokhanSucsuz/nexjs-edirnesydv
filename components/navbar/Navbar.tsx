import React from "react";
import TopMenu from "./TopMenu";
import Banner from "./Banner";
import Nav from "./Nav";

const Navbar = () => {
	return (
		<div className="relative">
			<TopMenu />
			<Banner />
			<Nav />
		</div>
	);
};

export default Navbar;

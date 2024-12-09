import DynamicMap from "@/components/maps/DynamicMap";
import React from "react";

const ContactPage = () => {
	return (
		<div className="flex flex-col">
			<DynamicMap page={true} />
		</div>
	);
};

export default ContactPage;

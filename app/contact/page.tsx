import DynamicMap from "@/components/maps/DynamicMap";
import React from "react";

const ContactPage = () => {
	const defaultLocation = [41.679422489582436, 26.555350374890356] as [number, number];
	return (
		<div className="flex flex-col">
			<DynamicMap page={true} location={defaultLocation} />
		</div>
	);
};

export default ContactPage;

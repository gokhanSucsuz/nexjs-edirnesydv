import React from "react";

const VakifPage = ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	console.log(slug);
	return (
		<div>
			{slug}
			fdsasdf
		</div>
	);
};

export default VakifPage;

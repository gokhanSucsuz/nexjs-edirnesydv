import React from "react";

type ParamsType = Promise<{ slug: string }>;

const VakifPage = async ({ params }: { params: ParamsType }) => {
	const { slug } = await params;
	return (
		<div>
			{slug}
		</div>
	);
};

export default VakifPage;

import React from "react";

type ParamsType = Promise<{ slug: string }>;
const AnnouncementDetailPage = async ({ params }: { params: ParamsType }) => {
	const { slug } = await params;
	return (
		<div>
			<div>AnnouncementDetailPage</div>
			{slug}
		</div>
	);
};

export default AnnouncementDetailPage;

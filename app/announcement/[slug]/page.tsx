import React from "react";

const AnnouncementDetailPage = ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	return (
		<div>
			<div>AnnouncementDetailPage</div>
			{slug}
		</div>
	);
};

export default AnnouncementDetailPage;

import React from "react";
import { VakifCard } from "./ManagerCard";
import { Announcements } from "../annoncement/AnnounceOrientation";
import { fetchDataFromStrapi } from "@/utils/strapi";

type ManagerTypes = {
	id: number;
	documentId: string;
	title: string;
	name: string;
	biography: [
		{
			children?: [
				{
					text?: string;
				}
			];
		}
	];
	image: {
		url: string;
	};
};
const VakifCards = async () => {
	const info = await fetchDataFromStrapi("/managers?populate=*");
	return (
		<div className="w-[96%] flex flex-wrap gap-4 px-4 mx-auto">
			{info.map((data: ManagerTypes) => {
				return (
					<div
						key={data.documentId}
						className="flex basis-[8em] flex-grow flex-shrink"
					>
						<VakifCard key={data.id} props={data} />
					</div>
				);
			})}
			<div className="flex basis-[24em] flex-grow flex-shrink">
				<Announcements />
			</div>
		</div>
	);
};

export default VakifCards;

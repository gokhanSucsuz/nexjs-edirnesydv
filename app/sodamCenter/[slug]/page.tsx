import ContactFooter from "@/components/footer/ContactFooter";
import DynamicMap from "@/components/maps/DynamicMap";
import { fetchDataFromStrapi } from "@/utils/strapi";
import React from "react";

type SodamType = {
	documentId: string;
	name: string;
	tel: string;
	email: string;
	address: string[];
}

type ParamsType = Promise<{ slug: string }>;

const SodamCenterDetailPage = async ({ params }: { params: ParamsType }) => {
	const { slug } = await params;
	const sodams = await fetchDataFromStrapi("/sodam-centers?populate=*");
	const filteredSodam = sodams.find((sodam: SodamType) => sodam.documentId === slug);
	const location = [filteredSodam?.latitude, filteredSodam?.longitude] as [number, number];
	return (
		<div className="flex flex-col">
			<DynamicMap page={true} location={location} />
			<ContactFooter address={filteredSodam?.address[0].children[0].text} tel={filteredSodam?.tel} email={filteredSodam?.email} />
		</div>
	);
};

export default SodamCenterDetailPage;

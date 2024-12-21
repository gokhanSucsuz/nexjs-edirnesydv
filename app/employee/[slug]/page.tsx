import { fetchDataFromStrapi } from "@/utils/strapi";
import Image from "next/image";
import React from "react";

type PersonalType = {
	documentId: string;
	personalName: string;
	personalSurname: string;
	title: string;
	image: {
		url: string;
	};
};

type ParamsType = Promise<{ slug: string }>;
const PersonalDetailPage = async ({ params }: { params: ParamsType }) => {
	const { slug } = await params;
	const personals = await fetchDataFromStrapi("/personals?populate=*");
	const stuff = personals.find(
		(personal: PersonalType) => personal.documentId === slug
	);
	return (
		<>
		<h2>Çalışanın;</h2>
		<ul>
			<li>Adı: {stuff?.personalName} {stuff?.personalSurname}</li>
			<li>Pozisyonu: {stuff?.title}</li>
			<li>Fotografi: <Image src={stuff?.image.url} alt="alt" width={200} height={200} /></li>
			<li>Ünvanı: {stuff?.title}</li>
		</ul>
		</>
	);
};

export default PersonalDetailPage;

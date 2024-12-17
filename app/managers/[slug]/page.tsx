import { fetchDataFromStrapi } from "@/utils/strapi";
import Image from "next/image";
import React from "react";

type BiographyItem = {
	children?: {
		text?: string;
	}[];
};

type ManagerTypes = {
	documentId: string;
	title: string;
	name: string;
	biography: BiographyItem[];
	image: {
		url?: string;
		name?: string;
	};
};

type ParamsType = Promise<{ slug: string }>;

const VakifPage = async ({ params }: { params: ParamsType }) => {
	const { slug } = await params;
	const managers = await fetchDataFromStrapi("/managers?populate=*");
	const manager = managers.find(
		(manager: ManagerTypes) => manager.documentId === slug
	);
	return (
		<div className="flex flex-col items-center text-xs sm:text-sm md:text-base lg:text-lg py-8">
			<h1 className="text-center m-4 p-2 rounded-lg text-white bg-bgDefault uppercase font-extrabold">
				{manager.title}
			</h1>
			<h3 className="text-center m-4 p-2 rounded-lg uppercase font-extrabold">
				{manager.name}
			</h3>
			<div className="p-4">
				<Image src={manager.image && `${process.env.NEXT_PUBLIC_STRAPI_URL}${manager.image.url}` || "/no-image.svg"} alt={manager?.image?.name || ""} width={1000} height={600}
				className="w-[45em] h-auto object-cover mx-auto rounded-xl mb-8 shadow-xl shadow-black "/>
			</div>
			<div className="text-start">
				{manager.biography.map((item: BiographyItem) => {

				return (
					<p key={item?.children?.[0]?.text}>{item?.children?.[0]?.text} <br /></p>
				)
			})}
			</div>
		</div>
	);
};

export default VakifPage;

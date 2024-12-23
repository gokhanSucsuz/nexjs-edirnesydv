import { fetchDataFromStrapi } from "@/utils/strapi";
import Image from "next/image";
import React from "react";

type InfoItem = {
	children?: {
		text?: string;
	}[];
};

type ManagerTypes = {
	documentId: string;
	name: string;
	info: InfoItem[];
	image: {
		url?: string;
		name?: string;
	};
};


const VakifPage = async () => {
    const foundationManager: ManagerTypes[] = await fetchDataFromStrapi("/foundation-managers?populate=*");
    console.log(foundationManager[0].name)

	return (
		<div className="flex flex-col  text-xs sm:text-sm md:text-base lg:text-lg py-8">

			<h3 className="text-center m-4 p-2 rounded-lg uppercase font-extrabold">
				{foundationManager[0].name}
			</h3>
			<div className="p-4">
				<Image src={foundationManager[0].image && `${process.env.NEXT_PUBLIC_STRAPI_URL}${foundationManager[0].image.url}` || "/no-image.svg"} alt={foundationManager[0]?.image?.name || ""} width={1000} height={600}
				className="w-[45em] h-auto object-cover mx-auto rounded-xl mb-8 shadow-xl shadow-black "/>
			</div>
			<div className="text-start">
  {foundationManager[0].info?.length > 0 ? (
    foundationManager[0].info.map((item: InfoItem, index) => (
      <p key={index}>
        {item?.children?.[0]?.text || ""} <br />
      </p>
    ))
  ) : (
    <p>No information available.</p>
  )}
</div>

		</div>
	);
};

export default VakifPage;

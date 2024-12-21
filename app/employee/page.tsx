import { fetchDataFromStrapi } from "@/utils/strapi";
import Image from "next/image";
import Link from "next/link";
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

const PersonalPage = async () => {
	const personals = await fetchDataFromStrapi("/personals?populate=*");
	return (<>
		<h1>Personal Page</h1>
		<div className="flex flex-wrap items-center justify-center gap-4">
			
			{personals.map((personal: PersonalType) => {
				return (
					<div key={personal.documentId} className="flex flex-col mx-auto items-center justify-center py-8 my-8 gap-4 shadow-lg p-4 rounded-lg w-[20em]">
						<Link href={`/employee/${personal.documentId}`} className="flex items-center justify-center w-[6em] h-[8em]">
							<Image
								src={
									(personal.image && `${personal.image.url}`) || "/no-image.svg"
								}
								alt="no-image"
								width={1000}
								height={1000}
								className="w-full h-full object-cover rounded-xl "
							/>
						</Link>
						<div className="flex flex-col items-center justify-center">
							<p>
								{personal.personalName}
							</p>
							<p>
								{personal.personalSurname}
							</p>
							<p>
								{personal.title}
							</p>
						</div>
					</div>
				);
			})}
		</div>
		</>
	);
};

export default PersonalPage;

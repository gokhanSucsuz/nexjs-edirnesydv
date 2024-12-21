import { fetchDataFromStrapi } from "@/utils/strapi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type WorkersType = {
	documentId: string;
	name: string;
	surname: string;
	title: string;
	image: {
		url: string;
	};
};

const WorkersPage = async () => {
	const workers = await fetchDataFromStrapi("/workers?populate=*");
	return (<>
		<h1>workers Page</h1>
		<div className="flex flex-wrap items-center justify-center gap-4">
			
			{workers.map((workers: WorkersType) => {
				return (
					<div key={workers.documentId} className="flex flex-col mx-auto items-center justify-center py-8 my-8 gap-4 shadow-lg p-4 rounded-lg w-[20em]">
						<Link href={`/employee/${workers.documentId}`} className="flex items-center justify-center w-[6em] h-[8em]">
							<Image
								src={
									(workers.image && `${workers.image.url}`) || "/no-image.svg"
								}
								alt="no-image"
								width={1000}
								height={1000}
								className="w-full h-full object-cover rounded-xl "
							/>
						</Link>
						<div className="flex flex-col items-center justify-center">
							<p>
								{workers.name}
							</p>
							<p>
								{workers.surname}
							</p>
							<p>
								{workers.title}
							</p>
						</div>
					</div>
				);
			})}
		</div>
		</>
	);
};

export default WorkersPage;

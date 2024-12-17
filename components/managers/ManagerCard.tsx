import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type BiographyItem = {
	children?: [
		{
			text?: string;
		}
	];
};
type ManagerTypes = {
	props: {
		id: number;
		documentId: string;
		title: string;
		name: string;
		biography: BiographyItem[];
		image: {
			url: string;
		};
	};
};
export async function VakifCard({ props }: ManagerTypes) {
	const { biography, image, title, name, documentId } = await props;
	return (
		<div className="flex items-center flex-col justify-center gap-4 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-xl shadow-md shadow-bgDefault p-4">
			<div className="w-[12em] h-[8em] flex justify-center p-1">
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
					alt={title}
					width={1000}
					height={1000}
					className="w-full h-full object-cover rounded-lg shadow-lg shadow-black priority"
				/>
			</div>
			<div className="flex flex-col gap-4 w-full">
				<h3 className="capitalize font-extrabold text-bgDefault text-center">
					{title.split("-")[0]}
				</h3>
					<h4 className="capitalize font-extrabold text-bgDefault text-center">{title.split("-")[1]}</h4>
				<h5  className="capitalize font-semibold text-bgDefault text-center">{name}</h5>
				<div className="line-clamp-4 text-slate-700">
					{biography.map((item: BiographyItem, index: number) => {
						return (
							<p key={index}>
								{item?.children?.[0]?.text}
							</p>
						);
					})}
				</div>
				<div className="w-full flex justify-end">
					<Link href={`/managers/${documentId}`}>
						<Button
							size={"sm"}
							className="bg-bgDefault hover:bg-bgDefault/80 text-white hover:text-white/80 hover:shadow-lg hover:shadow-black/80 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl"
						>
							Daha Fazla Bilgi
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

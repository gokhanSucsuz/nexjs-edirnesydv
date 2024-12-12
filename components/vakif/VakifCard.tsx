import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

type PropsTypes = {
	props: {
		id: number;
		title: string;
		url: string;
		biography: string;
	};
};

export function VakifCard({ props }: PropsTypes) {
	return (
		<div className="flex items-center  justify-center gap-4 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
			<div className="w-full">
				<Image
					src={props.url}
					alt={props.title}
					width={1000}
					height={1000}
					className="w-48 h-48 object-cover rounded-lg priority"
				/>
			</div>
			<div className="flex flex-col gap-4 w-full">
				<h3 className="capitalize">
					{props.title}
				</h3>
				<p className="line-clamp-4">
					{props.biography}
				</p>
				<div className="w-full flex justify-end">
					<Button
						variant={"destructive"}
						className="bg-bgDefault text-white hover:bg-red-500"
					>
						Devamını Oku
					</Button>
				</div>
			</div>
		</div>
	);
}

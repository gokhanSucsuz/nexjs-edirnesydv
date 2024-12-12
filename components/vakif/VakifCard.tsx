import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
		<div className="flex items-center flex-col justify-center gap-4 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-xl">
			<div className="w-full h-full flex justify-center p-4">
				<Image
					src={props.url}
					alt={props.title}
					width={1000}
					height={1000}
					className="w-full h-full object-cover rounded-lg shadow-lg shadow-black priority"
				/>
			</div>
			<div className="flex flex-col gap-4 w-full">
				<h3 className="capitalize font-extrabold text-bgDefault">
					{props.title}
				</h3>
				<p className="line-clamp-4 text-slate-700">
					{props.biography}
				</p>
				<div className="w-full flex justify-end">
					<Link href={`/vakif/${props.id}`}>
						<Button className="bg-bgDefault hover:bg-bgDefault/80 text-white hover:text-white/80 hover:shadow-lg hover:shadow-black/80">
							Daha Fazla Bilgi
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

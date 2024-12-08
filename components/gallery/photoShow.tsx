"use client";
import { CldImage } from "next-cloudinary";
export default function PhotoShow({
	image,
	modal
}: {
	image: string;
	modal?: boolean;
}) {
	return (
		<CldImage
			src={image}
			alt="alt"
			width="2000"
			height="2000"
			className={`${modal
				? "w-full h-full flex-basis-full"
				: "max-w-full max-h-[200px] object-cover"} flex-grow flex-shrink aspect-square rounded-xl p-1 shadow-black/50 shadow-lg`}
			crop={{ type: "auto", source: true }}
		/>
	);
}

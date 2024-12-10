"use client";
import { CldImage } from "next-cloudinary";
export default function PhotoShow({
	image,
	modal
}: {
	image: string;
	modal?: boolean;
}) {
	return <CldImage src={image} alt="alt" width="2000" height="2000" className={`${modal ? "w-full h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] py-4" : "object-cover h-[10vh]"}  rounded-xl p-1 shadow-black/50 shadow-lg`} crop={{ type: "auto", source: true }} />;
}

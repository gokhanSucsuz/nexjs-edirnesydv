import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import PhotoShow from "./photoShow";
import { fetchImagesFromFolder } from "@/utils/fetchImages";

const Gallery = async () => {
	const images = await fetchImagesFromFolder();

	return (<>
		<div className="flex flex-wrap w-full h-full gap-2 p-4 md:p-10 bg-slate-700 rounded-lg">
			<h3 className="flex w-full items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg text-pretty text-slate-100 font-extrabold rounded-lg">
					VAKFIMIZDAN KARELER
			</h3>
			{images.map(image => {
				return (
					<div key={image} className="basis-[10em] flex-grow flex-shrink">
						<Dialog>
							<DialogTrigger>
								<PhotoShow image={image} />
							</DialogTrigger>
							<DialogContent className="w-full h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] bg-bgDefault bg-opacity-60 flex items-center justify-center ">
								<DialogHeader className="hidden">
									<DialogTitle></DialogTitle>
									<DialogDescription>
									</DialogDescription>
								</DialogHeader>
								<PhotoShow image={image} modal />
							</DialogContent>
						</Dialog>
					</div>
				);
			})}
			</div>
		</>
	);
};

export default Gallery;

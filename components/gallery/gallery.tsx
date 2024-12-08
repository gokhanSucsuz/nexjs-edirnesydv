import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import { fetchImagesFromFolder } from "@/utils/fetchImages";
import PhotoShow from "./photoShow";

const Gallery = async () => {
	const images = await fetchImagesFromFolder();
	return (<>
		<div className="flex flex-wrap w-full h-full gap-2 p-4 md:p-10  bg-slate-700">
			<h3 className="flex w-full items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg text-pretty text-slate-100 font-extrabold">
					VAKFIMIZDAN KARELER
				</h3>
			{images.map(image => {
				return (
					<div key={image} className="basis-[200px] flex-grow flex-shrink">
						<Dialog>
							<DialogTrigger>
								<PhotoShow image={image} />
							</DialogTrigger>
							<DialogContent className="w-[96%] h-[30%] sm:h-[50%] lg:h-[80%] xl:h-[95%] bg-opacity-90 flex items-center justify-center ">
								<DialogHeader>
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

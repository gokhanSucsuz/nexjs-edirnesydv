"use client";
import * as React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export function Announcements() {
	const plugin = React.useRef(
		Autoplay({
			delay: 3000,
			stopOnInteraction: true
		})
	);
	const slug = 1;
	return <Carousel plugins={[plugin.current]} opts={{ align: "center" }} orientation="vertical" className="w-full mx-auto py-2">
			<h1 className="text-center py-4 font-extrabold text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-bgDefault animate-bounce">
				DUYURULAR
			</h1>
			<CarouselContent className="-mt-1 h-[30rem] max-h-[600px] w-full">
				{Array.from({
					length: 5
				}).map((_, index) =>
					<CarouselItem key={index} className="pt-1 basis-1/4">
						<div className="p-1 w-full">
							<Card>
								<CardContent className="flex items-center justify-center p-2 w-full">
									<section className="flex border-b w-full h-full rounded-br-full rounded-tr-full ">
										<span className="w-full h-full">12.12.2024</span>
									</section>
									<section className="flex flex-col p-2 mx-auto w-full h-full">
										<Dialog>
											<DialogTrigger>
												<h3 className="font-extrabold relative group flex flex-col gap-2 transition-shadow duration-500">
													TITLE <span>12.12.2025</span>
													<span className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500 group-hover:w-0" />
												</h3>
											</DialogTrigger>
											<DialogContent className="w-full h-fit py-16 bg-bgDefault bg-opacity-60 flex items-center justify-center ">
												<DialogHeader className="hidden">
													<DialogTitle />
													<DialogDescription />
												</DialogHeader>
												<Link
													href={`/announcement/${slug}`}
													className="flex flex-col gap-2 p-2 rounded-lg text-slate-100 text-xs sm:text-sm md:text-base lg:text-lg "
												>
													<h3 className="font-extrabold relative group flex flex-col gap-2 transition-shadow duration-500">
														TITLE
														<span className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500 group-hover:w-0" />
													</h3>
													<p className="text-ellipsis ">
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Praesentium dolor sapiente esse atque,
														itaque rem? Vitae ab at veritatis, voluptates,
														inventore amet, cum impedit iusto temporibus sunt
														voluptatibus fuga earum quisquam? Nemo ad quia
														magni harum. Facilis necessitatibus cupiditate
														suscipit molestias corporis eaque, consequatur
														eius quidem error sint unde neque? Lorem ipsum
														dolor sit amet consectetur adipisicing elit. Quod
														optio saepe a ab iusto reiciendis incidunt earum,
														cumque harum voluptatum tenetur voluptates ratione
														provident architecto doloremque fugiat cum
														corrupti eveniet sapiente voluptate. Repellendus
														modi quia nam aliquam quo dolores iusto.
													</p>
													<span>12.12.2025</span>
												</Link>
											</DialogContent>
										</Dialog>
									</section>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				)}
			</CarouselContent>
		</Carousel>;
}

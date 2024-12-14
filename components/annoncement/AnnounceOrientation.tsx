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
	CarouselItem,
	CarouselNext,
	CarouselPrevious
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
	return (
		<Carousel
			plugins={[plugin.current]}
			opts={{ align: "center" }}
			orientation="vertical"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
			className="w-full h-[24em] mx-auto my-4"
		>
			<h1 className="text-center text-xs sm:text-sm md:text-base lg:text-lg uppercase font-extrabold py-4 bg-bgDefault text-white rounded-t-full m-1">
				Duyurular
			</h1>
			<CarouselContent className=" max-h-[24em] w-full">
				{Array.from({
					length: 5
				}).map((_, index) =>
					<CarouselItem key={index} className="basis-1/5 w-full px-2">
						<Card>
							<CardContent className="w-full flex items-center ">
								<div className="flex items-center justify-center w-full">
									<section className="flex border border-b w-1/3 h-full rounded-br-full rounded-tr-full bg-bgDefault bg-opacity-75 text-white ">
										<span className="w-full h-[4em] flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg">
											12.12.2024
										</span>
									</section>
									<section className="flex flex-col mx-auto w-2/3 ">
										<Dialog>
											<DialogTrigger>
												<h3 className="font-extrabold line-clamp-1 gap-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg">
													Duyuru ..............
												</h3>
											</DialogTrigger>
											<DialogContent className="w-[96%] h-fit py-16 bg-bgDefault bg-opacity-60 flex items-center justify-center ">
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
														elit. Praesentium dolor sapiente esse atque, itaque
														rem? Vitae ab at veritatis, voluptates, inventore
														amet, cum impedit iusto temporibus sunt voluptatibus
														fuga earum quisquam? Nemo ad quia magni harum.
														Facilis necessitatibus cupiditate suscipit molestias
														corporis eaque, consequatur eius quidem error sint
														unde neque? Lorem ipsum dolor sit amet consectetur
														adipisicing elit. Quod optio saepe a ab iusto
														reiciendis incidunt earum, cumque harum voluptatum
														tenetur voluptates ratione provident architecto
														doloremque fugiat cum corrupti eveniet sapiente
														voluptate. Repellendus modi quia nam aliquam quo
														dolores iusto.
													</p>
													<span>12.12.2025</span>
												</Link>
											</DialogContent>
										</Dialog>
									</section>
								</div>
							</CardContent>
						</Card>
					</CarouselItem>
				)}
			</CarouselContent>
		</Carousel>
	);
}

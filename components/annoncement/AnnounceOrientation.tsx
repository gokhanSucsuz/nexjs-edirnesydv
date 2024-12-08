"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export function CarouselOrientation() {
	const plugin = React.useRef(
		Autoplay({
			delay: 3000,
			stopOnInteraction: true
		})
	);
	return (
		<Carousel
			plugins={[plugin.current]}
			opts={{ align: "start" }}
			orientation="vertical"
			className="w-full max-w-3xl mx-auto"
		>
			<h1 className="text-center py-4 font-extrabold text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-bgDefault animate-bounce">
				DUYURULAR
			</h1>
			<CarouselContent className="-mt-1 h-[250px] max-h-[600px]">
				{Array.from({
					length: 5
				}).map((_, index) =>
					<CarouselItem key={index} className="pt-1 md:basis-1/2">
						<div className="p-1">
							<Card>
								<CardContent className="flex items-center justify-center p-6 ">
									<section className="flex flex-col p-2 mx-auto">
										<Link
											href="/duyuru"
											className="flex flex-col gap-2 p-2 rounded-lg text-slate-500 text-sm sm:text-sm md:text-base "
										>
											<h3 className="font-extrabold relative group flex flex-col gap-2 transition-shadow duration-500">
												TITLE
												<span className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500 group-hover:w-0" />
											</h3>
											<p className="line-clamp-4 text-ellipsis ">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Praesentium dolor sapiente esse atque, itaque rem? Vitae
												ab at veritatis, voluptates, inventore amet, cum impedit
												iusto temporibus sunt voluptatibus fuga earum quisquam?
												Nemo ad quia magni harum. Facilis necessitatibus
												cupiditate suscipit molestias corporis eaque,
												consequatur eius quidem error sint unde neque? Lorem
												ipsum dolor sit amet consectetur adipisicing elit. Quod
												optio saepe a ab iusto reiciendis incidunt earum, cumque
												harum voluptatum tenetur voluptates ratione provident
												architecto doloremque fugiat cum corrupti eveniet
												sapiente voluptate. Repellendus modi quia nam aliquam
												quo dolores iusto.
											</p>
											<span>12.12.2025</span>
										</Link>
									</section>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				)}
			</CarouselContent>
		</Carousel>
	);
}

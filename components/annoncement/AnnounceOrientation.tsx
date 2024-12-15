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
import { fetchDataFromStrapi } from "@/utils/strapi";
import { dateFormat } from "@/utils/dateFormat";

export function Announcements() {
	const [announcements, setAnnouncements] = React.useState<string[]>([]);
	React.useEffect(() => {
		const fetchData = async () => {
			const data = await fetchDataFromStrapi(
				"/announcements?populate=*&sort=createdAt:desc"
			);
			setAnnouncements(data);
		};
		fetchData();
	}, []);
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
			<h1 className="text-center text-xs sm:text-sm md:text-base lg:text-lg uppercase font-extrabold py-4 bg-bgDefault text-white rounded-t-full ">
				Duyurular
			</h1>
			<CarouselContent className=" max-h-[24em] w-full">
				{announcements?.map((announce: any) =>
					<CarouselItem key={announce?.documentId} className="basis-1/5 w-full px-2">
						<Card>
							<CardContent className="w-full flex items-center ">
								<div className="flex items-center justify-center w-full">
									<section className="flex border border-b w-1/3 h-full rounded-br-full rounded-tr-full bg-bgDefault bg-opacity-75 text-white ">
										<span className="w-full h-[4em] flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg">
											{dateFormat(announce?.createdAt).slice(0, 14)}
										</span>
									</section>
									<section className="flex flex-col mx-auto w-2/3 ">
										<Dialog>
											<DialogTrigger>
												<h3 className="font-extrabold line-clamp-1 gap-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg">
													{announce?.title}
												</h3>
											</DialogTrigger>
											<DialogContent className="w-[96%] h-fit py-16 bg-bgDefault bg-opacity-60 flex items-center justify-center ">
												<DialogHeader className="hidden">
													<DialogTitle />
													<DialogDescription />
												</DialogHeader>
												<Link
													href={`/announcement/${announce?.documentId}`}
													className="flex flex-col gap-2 p-2 rounded-lg text-slate-100 text-xs sm:text-sm md:text-base lg:text-lg "
												>
													<h3 className="font-extrabold relative group flex flex-col gap-2 transition-shadow duration-500">
														{announce?.title}
														<span className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500 group-hover:w-0" />
													</h3>
													<p className="text-ellipsis ">
														{announce?.content.map((item:any)=> item.children[0].text)}
													</p>
													<span>{dateFormat(announce?.createdAt)}</span>
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

"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function Slider() {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true, playOnInit: true })
	);

	return <section className="flex w-full">
			<Carousel plugins={[plugin.current]} className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full " onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
				<CarouselContent>
					{Array.from({
						length: 7
					}).map((_, index) => <CarouselItem key={index}>
							<div className="bg-slate-500 rounded-xl">
								<div className="relative rounded-xl">
									<div className="relative">
										<Image src={`/test/${index + 1}.jpg`} alt="alt" width={1000} height={1000} className=" object-cover rounded-md mx-auto h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full" />
									</div>
									<div className="absolute top-[70%] bg-slate-900 opacity-75 w-full h-[calc(100%-70%)] flex ">
										<Link href={"/"} className="text-white px-8 py-2 text-xs sm:text-sm md:text-base lg:text-xl hover:underline">
											<p className="font-extrabold">TITLE</p>
											<p className="leading-snug line-clamp-2 ">
												Lorem ipsum dolor sit amet consectetur adipisicing
												elit. Cupiditate suscipit commodi reprehenderit
												architecto. Exercitationem nesciunt amet ratione iste
												libero labore et soluta dolorum cum possimus
												asperiores, iure facilis reprehenderit nam quidem
												veniam, sed quod placeat magnam vitae ad? Eveniet
												aliquam natus, quibusdam amet repudiandae facere
												consequuntur provident in similique assumenda.
											</p>
										</Link>
										<div className="absolute top-[80%] left-8 text-white text-xs sm:text-sm ">
											<div className="flex items-center gap-2">
												<Calendar size={16} />
												<span>
													{new Date().toLocaleDateString()}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>)}
				</CarouselContent>
			</Carousel>
		</section>;
}

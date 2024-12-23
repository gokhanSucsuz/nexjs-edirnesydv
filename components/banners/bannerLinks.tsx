"use client";
import * as React from "react";
import Image from "next/image";
import { bannerLinks } from "@/utils/functions";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export function BannerLinks() {
	const controls = useAnimation();
	return <div className="flex flex-wrap w-full gap-12 text-xs sm:text-sm md:text-base lg:text-lg">
			{bannerLinks.map((banner, index) => {
				return <motion.div key={index} style={{ borderRadius: "5px" }} initial={{ opacity: 0, y: -50 }} animate={controls} transition={{ duration: 0.3, ease: "easeInOut", delay: index * 0.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} onViewportEnter={() => {
							controls.start({ opacity: 1, y: 0 });
						}} onViewportLeave={() => {
							controls.set({ opacity: 0, y: -50 });
						}}>
						<Link href={banner.url} className="flex items-center justify-center basis-[96px] flex-grow flex-shrink ">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center justify-center gap-2">
											<Image src={banner.link} alt={banner.name} width={1000} height={1000} className="w-24 h-24 object-cover" />
											<p>
												{banner.name}
											</p>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>
											{banner.name}
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</Link>
					</motion.div>;
			})}
		</div>;
}

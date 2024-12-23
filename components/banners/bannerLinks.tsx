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
import { motion } from "framer-motion";

export function BannerLinks() {
	return (
		<div className="flex flex-wrap w-full gap-12 text-xs sm:text-sm md:text-base lg:text-lg">
			{bannerLinks.map((banner, index) => {
				return (
					<motion.div
						key={banner.id}
						style={{ margin: "10px 0", padding: "10px", borderRadius: "5px" }}
						initial={{ opacity: 0, y: -20, rotate: -180 }}
						whileInView={{ opacity: 1, y: 0, rotate: 0 }}
						transition={{
							duration: 0.5,
							delay: index * 0.4 // Her eleman için gecikme
						}}
					>
						<Link
							href={banner.url}
							className="flex items-center justify-center basis-[96px] flex-grow flex-shrink "
						>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center justify-center gap-2">
											<Image
												src={banner.link}
												alt={banner.name}
												width={1000}
												height={1000}
												className="w-24 h-24 object-cover"
											/>
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
					</motion.div>
				);
			})}
		</div>
	);
}

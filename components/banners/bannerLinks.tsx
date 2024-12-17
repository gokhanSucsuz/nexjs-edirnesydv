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

export function BannerLinks() {
	return <div className="flex flex-wrap w-full gap-12 text-xs sm:text-sm md:text-base lg:text-lg">
			{bannerLinks.map(banner => {
				return <Link href={banner.url} key={banner.id} className="flex items-center justify-center basis-[96px] flex-grow flex-shrink ">
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
					</Link>;
			})}
		</div>;
}

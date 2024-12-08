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
	return (
		<div className="flex flex-wrap w-full gap-12 ">
			{bannerLinks.map(banner => {
				return (
					<Link
						href={banner.url}
						key={banner.id}
						className="flex items-center justify-center basis-[96px] flex-grow flex-shrink "
					>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<Image
										src={banner.link}
										alt={banner.name}
										width={1000}
										height={1000}
										className="w-24 h-24 object-cover"
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										{banner.name}
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</Link>
				);
			})}
		</div>
	);
}

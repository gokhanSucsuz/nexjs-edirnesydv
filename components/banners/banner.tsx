import React from "react";
import { BannerLinks } from "./bannerLinks";

const Banners = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center bg-slate-50 rounded-xl gap-2">
			<h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-pretty text-bgDefault font-extrabold animate-bounce">
				ÖNEMLİ BAĞLANTILAR
			</h3>
			<div className="flex flex-wrap items-center justify-center ">
				<BannerLinks />
			</div>
		</div>
	);
};

export default Banners;

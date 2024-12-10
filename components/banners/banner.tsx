import React from "react";
import { BannerLinks } from "./bannerLinks";

const Banners = () => {
	return <div className="w-full flex flex-col items-center justify-center  rounded-xl gap-2 py-16">
			<h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-pretty text-bgDefault font-extrabold animate-bounce pb-8">
				ÖNEMLİ BAĞLANTILAR
			</h3>
			<div className="flex flex-wrap items-center justify-center mb-8 ">
				<BannerLinks />
			</div>
		</div>;
};

export default Banners;

import { Activities } from "@/components/activities/Activities";
import React from "react";

const ActivitiesPage = () => {
	return (
		<div className="flex flex-col items-center text-xs sm:text-sm md:text-base lg:text-lg py-8">
			<h1 className="text-center m-2 p-2 rounded-lg text-white bg-bgDefault uppercase font-extrabold w-full">
				2024 YILI FAALİYET RAPORU
			</h1>
			<Activities />
		</div>
	);
};

export default ActivitiesPage;

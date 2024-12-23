import * as React from "react";
import { fetchDataFromStrapi } from "@/utils/strapi";
import AidMotion from "./AidMotion";

type HelpTypes = {
	documentId: string;
	typeOf: string;
	program: string;
	scope: string;
	whoCanBenefit: string;
	requireDocs: string;
	amount: string;
	paymentPeriod: string;
	applicant: string;
	createdAt: string;
};

export async function AidCards() {
	const helps = await fetchDataFromStrapi(
		"/help-types?populate=*&sort=typeOf:asc"
	);
	return (
		<section className="relative flex flex-wrap w-full bg-red-500 text-slate-100 py-8 rounded-md">
			<div className="h-2 w-full bg-slate-900 absolute top-0 left-0" />
			<h3 className="flex w-full justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg text-pretty text-slate-100 font-extrabold py-4 ">
				VAKFIMIZIN YARDIM TÜRLERİ
			</h3>
			{helps.map((program: HelpTypes, index: number) => {
				return <AidMotion key={index} program={program} index={index} />;
			})}
		</section>
	);
}

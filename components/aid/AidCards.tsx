import * as React from "react";
import Link from "next/link";
import { helpPrograms } from "@/utils/functions";
import Image from "next/image";
import { fetchDataFromStrapi } from "@/utils/strapi";

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
			{helps.map((program: any) => {
				return (
					<div
						key={program.documentId}
						className="basis-[15em] flex-grow flex-shrink flex flex-wrap items-center justify-center"
					>
						<Link
							href={`/aid/${program.documentId}`}
							className="flex flex-1 group items-center hover:underline p-3 rounded-md"
						>
							<Image
								src="/info.svg"
								alt="alt"
								width={1000}
								height={1000}
								className="w-10 h-10 mr-2 rounded-full"
							/>
							<div className="flex flex-wrap ">
								{program.program}
							</div>
						</Link>
					</div>
				);
			})}
		</section>
	);
}

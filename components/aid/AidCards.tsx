import * as React from "react";
import Link from "next/link";
import { helpPrograms } from "@/utils/functions";
import Image from "next/image";

export function AidCards() {
	return (
		<section className="flex flex-wrap w-full bg-red-500 text-slate-100 py-8 rounded-md">
			<h3 className="flex w-full justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg text-pretty text-slate-100 font-extrabold py-4 ">
				VAKFIMIZIN YARDIM TÜRLERİ
			</h3>
			{helpPrograms.map(program => {
				return (
					<div
						key={program.id}
						className="basis-[15em] flex-grow flex-shrink flex flex-wrap items-center justify-center"
					>
						<Link
							href={program.link}
							className="relative flex flex-1 group items-start transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-bgDefault p-3 rounded-md"
						>
							<div className="w-0 h-2 bg-white absolute top-1/2 left-0" />
							<Image
								src="/together.gif"
								alt="alt"
								width={1000}
								height={1000}
								className="w-10 h-10 mr-2 rounded-full"
							/>
							<div className="flex flex-wrap text-center">
								{program.name}
							</div>
						</Link>
					</div>
				);
			})}
		</section>
	);
}

"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

const AidMotion = ({ program, index }: { program: HelpTypes; index: number }) => {
	const controls = useAnimation();

	return (
		<>
			<motion.div
				className="basis-[15em] flex-grow flex-shrink flex flex-wrap items-center justify-center"
				key={index}
				style={{ margin: "10px 0", padding: "10px", borderRadius: "5px" }}
				initial={{ opacity: 0, y: -20, rotate: -180 }}
				animate={controls}
				transition={{ duration: 0.3, ease: "easeInOut" }} // Daha hızlı animasyon
				whileInView={{
					opacity: 1,
					y: 0,
					rotate: 0,
				}}
				viewport={{
					once: false,
					amount: 0.5,
				}}
				onViewportEnter={() => {
					// Animasyon başlasın
					controls.start({ opacity: 1, rotate: 0, y: 0 });
				}}
				onViewportLeave={() => {
					// Görünüm dışına çıktığında hemen sıfırla
					controls.set({ opacity: 0, y: -20, rotate: -180 });
				}}
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
					<div className="flex flex-wrap ">{program.program}</div>
				</Link>
			</motion.div>
		</>
	);
};

export default AidMotion;

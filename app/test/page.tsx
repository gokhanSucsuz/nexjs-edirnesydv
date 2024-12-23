"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";

const TestPage = () => {
	const controls = useAnimation();
	return (
		<section className="flex flex-wrap md:flex-nowrap items-center justify-around gap-2 bg-slate-100 shadow-2xl shadow-black px-4 mb-2">
			<Link href="/" className="py-2 order-1 ">
				<Image
					src={"/edirnesydv-logo.svg"}
					alt="edirnesydv logo"
					width={70}
					height={70}
					className="bg-white p-1 rounded-full w-16 h-16 md:w-24 md:h-24 hover:shadow-xl hover:shadow-bgDefault"
				/>
			</Link>
			<div className="flex  order-3 sm:order-2">
				<span className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-bgDefault flex flex-col items-center justify-center  gap-2">
					<span className="font-extrabold">T.C.</span>
					<span className="font-extrabold">EDİRNE VALİLİĞİ</span>
					<span className="font-extrabold">
						SOSYAL YARDIMLAŞMA VE DAYANIŞMA VAKFI BAŞKANLIĞI
					</span>
				</span>
			</div>
			<div className="py-2 order-2 sm:order-3 ">
				<motion.div
					style={{ borderRadius: "5px", position: "relative" }}
					initial={{ opacity: 0 }}
					animate={controls}
					transition={{ duration: 3, ease: "easeInOut" }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					onViewportEnter={() => {
						controls.start({ opacity: 1, y: 0 });
					}}
					onViewportLeave={() => {
						controls.set({ opacity: 0, y: -50 });
					}}
				>
					<Image
						src={"/ataturk_flag.svg"}
						alt="edirnesydv logo"
						width={1000}
						height={1000}
						className="w-24 h-12 md:w-32 md:h-20 waving-flag"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default TestPage;

"use client";
import { Mail, PhoneCall } from "lucide-react";
import React from "react";

const TopMenu = () => {
	return (
		<section className="flex w-full bg-bgDefault text-xs justify-between">
			<div className="flex w-full items-center gap-2 text-white px-6 py-3">
				<PhoneCall size={24} />
				<div className="hidden sm:flex sm:flex-col">
					<span>+90 (284) 212 85 16</span>
					<span>+90 (284) 212 09 57</span>
				</div>
			</div>
			<div className="flex w-full items-center gap-2 justify-end text-white px-6 py-2">
				<Mail size={24} />
				<span className="hidden sm:flex sm:flex-col">edirnesydv@gmail.com</span>
			</div>
		</section>
	);
};

export default TopMenu;

"use client";
import { Mail, PhoneCall } from "lucide-react";
import React from "react";
import {
	FacebookIcon,
	FacebookShareButton,
	InstapaperIcon,
	InstapaperShareButton,
	TwitterIcon,
	TwitterShareButton
} from "react-share";

const TopMenu = () => {
	return (
		<section className="flex flex-col sm:flex-row w-full items-center justify-between bg-bgDefault">
			<div className="w-full sm:w-1/3 flex sm:flex-row items-center justify-center text-xs flex-wrap">
				<div className="flex items-center gap-2 text-white px-6 py-2">
					<PhoneCall size={24} />
					<div className="flex flex-col">
						<span className="hidden sm:block">+90 (284) 212 85 16</span>
						<span className="hidden sm:block">+90 (284) 212 09 57</span>
					</div>
				</div>
				<div className="flex items-center gap-2 text-white px-6 py-2">
					<Mail size={24} />
					<span className="hidden sm:block">edirnesydv@gmail.com</span>
				</div>
			</div>
			<div className="w-1/2 sm:w-2/3 flex items-center justify-center sm:justify-end text-xs my-1 mx-4 p-2 gap-2 ">
				<div className="flex flex-nowrap rounded-full p-1 px-3 gap-4 w-fit">
					<FacebookShareButton
						url="https://www.facebook.com/edirnesydv"
						hashtag="#edirnesydv"
					>
						<FacebookIcon size={24} className="rounded-full" />
					</FacebookShareButton>
					<TwitterShareButton
						url="https://twitter.com/edirnesydv"
						title="edirnesydv"
					>
						<TwitterIcon size={24} className="rounded-full" />
					</TwitterShareButton>
					<InstapaperShareButton
						url="https://www.instagram.com/edirnesydv"
						title="edirnesydv"
					>
						<InstapaperIcon size={24} className="rounded-full" />
					</InstapaperShareButton>
				</div>
			</div>
		</section>
	);
};

export default TopMenu;

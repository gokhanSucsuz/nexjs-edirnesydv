"use client";
import React from "react";
import DynamicMaps from "../maps/DynamicMap";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import {
	FacebookIcon,
	FacebookShareButton,
	InstapaperIcon,
	InstapaperShareButton,
	TwitterIcon,
	TwitterShareButton
} from "react-share";
import Link from "next/link";

const Footer = () => {
	const pathname = usePathname()
	return (<>
	
	{pathname !== "/contact" && (
		<div className="relative bg-slate-900 text-white py-2 mt-auto bottom-0 ">
			<div className="bg-bgDefault h-2 w-full absolute top-0 left-0"/>
			<div className="bg-slate-900 flex-wrap flex items-center justify-around gap-2 p-4 mb-12">
				<div className="p-2 basis-[10em] flex-grow flex-shrink">
					<DynamicMaps page={false} />
				</div>

				<div className="flex flex-col gap-2 text-white text-xs sm:text-sm md:text-base lg:text-lg shadow-2xl p-4  rounded-xl basis-[10em] flex-grow flex-shrink">
					<h3 className="w-full font-bold indent-5 group">
						İLETİŞİM
						<div className="w-0 h-[1px] bg-slate-50 group-hover:w-full transition-all duration-700 mt-2" />
					</h3>

					<Link href={"/contact"} className="flex gap-2 items-center justify-start hover:text-slate-300">
						<MapPin size={16} />
						<p>Babademirtaş Mah. Sebil Sk. No: 15 Merkez/EDİRNE</p>
					</Link>
					<div className="flex gap-2 items-center justify-start">
						<Phone size={16} />
						<p>
							Telefon numaramız:{" "}
							<a href="tel:+905551234567">+90 284 212 09 57</a>
						</p>
					</div>
					<div className="flex gap-2 items-center justify-start">
						<Phone size={16} />
						<p>
							Telefon numaramız:{" "}
							<a href="tel:+905551234567">+90 284 212 85 16</a>
						</p>
					</div>
			<div className="flex gap-2 items-center justify-start">
				<Mail size={16} />
				<p>
					E-posta adresimiz:
					<a href="mailto:edirnesydv@gmail"> edirnesydv@gmail.com</a>
				</p>
			</div>
				</div>
				<div className="flex flex-col gap-2 text-white text-xs sm:text-sm md:text-base lg:text-lg shadow-2xl p-4  rounded-xl basis-[10em] flex-grow flex-shrink">
					<div className="w-full font-bold text-center group">
						SOSYAL MEDYA HESAPLARIMIZ
					<div className="w-0 h-[1px] bg-slate-50 group-hover:w-full transition-all duration-700 mt-2" />
					</div>
					<div className="flex items-center justify-center  p-1 px-3 w-full gap-4 ">
					<FacebookShareButton url="https://www.facebook.com/edirnesydv" hashtag="#edirnesydv">
						<FacebookIcon size={24} className="rounded-full" />
					</FacebookShareButton>
					<TwitterShareButton url="https://twitter.com/edirnesydv" title="edirnesydv">
						<TwitterIcon size={24} className="rounded-full" />
					</TwitterShareButton>
					<InstapaperShareButton url="https://www.instagram.com/edirnesydv" title="edirnesydv">
						<InstapaperIcon size={24} className="rounded-full" />
					</InstapaperShareButton>
					</div>
					</div>
			</div>
			<div className="relative flex flex-col w-full flex-wrap justify-center items-center gap-2 py-4 text-xs sm:text-sm md:text-base lg:text-lg text-slate-300">
				<div className="bg-bgDefault h-2 w-full absolute top-0 left-0" />
				<span>Tüm hakları saklıdır © 2024</span>
				<span className="text-center">
					Edirne Merkez Sosyal Yardımlaşma ve Dayanışma Vakfı Resmi İnternet
					Sitesidir.
				</span>
				<span className="text-xs">Tasarım: Gökhan SUÇSUZ</span>
			</div>
		</div>
	)}
	</>
	);
};

export default Footer;

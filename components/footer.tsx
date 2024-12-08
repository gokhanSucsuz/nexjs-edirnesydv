import React from "react";
import DynamicMaps from "./maps/DynamicMap";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
	return (
		<div className="relative bg-slate-950 text-white py-2 ">
			<div className="bg-bgDefault h-3 w-full absolute top-0 left-0" />
			<div className="bg-slate-900 h-[420px] lg:h-[300px] flex items-center justify-around flex-wrap gap-2 p-4">
				<div className="border border-slate-400 p-2">
					<DynamicMaps />
				</div>
				<div className="flex flex-col gap-2 text-white text-xs sm:text-sm md:text-base lg:text-lg">
					<h3 className=" font-bold text-center group">
						İLETİŞİM
						<div className="w-0 h-[1px] bg-slate-50 group-hover:w-full transition-all duration-700 mt-2" />
					</h3>

					<div className="flex gap-2 items-center justify-start">
						<MapPin size={16} />
						<p>Babademirtaş Mah. Sebil Sk. No: 15 Merkez/EDİRNE</p>
					</div>
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
							<a href="mailto:edirnesydv@gmail">edirnesydv@gmail</a>
						</p>
					</div>
				</div>
			</div>

			<div className="relative flex flex-col w-full flex-wrap justify-center items-center gap-2 py-4 text-xs sm:text-sm md:text-base lg:text-lg ">
				<div className="bg-bgDefault h-3 w-full absolute top-0 left-0" />
				<span>Tüm hakları saklıdır ©2024</span>
				<span>
					Edirne Merkez Sosyal Yardımlaşma ve Dayanışma Vakfı Resmi İnternet
					Sitesidir.
				</span>
				<span>Tasarım: coolpisces</span>
			</div>
		</div>
	);
};

export default Footer;

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactFooter = () => {
	return <div className="relative h-full shadow-lg bg-slate-200 text-bgDefault py-2 mt-auto bottom-0 ">
			<div className="flex items-center justify-center gap-4 flex-wrap p-4">
				<div className="flex w-[16rem] gap-4 items-center justify-center p-2 rounded-md shadow-md shadow-bgDefault flex-grow flex-shrink flex-basis-1/2 h-[6rem] bg-white">
					<MapPin size={32} />
					<p className="flex flex-wrap w-[10rem]">
						Babademirtaş Mah. Sebil Sk. No: 15 Merkez/EDİRNE
					</p>
				</div>
				<div className="flex w-[16rem] gap-4 items-center justify-center p-2 rounded-md shadow-md shadow-bgDefault flex-grow flex-shrink flex-basis-1/2 h-[6rem]  bg-white">
					<Phone size={32} />
					<p className="flex flex-wrap w-[10rem]">
						<a href="tel:+902842120957">+90 284 212 09 57</a>
					</p>
				</div>
				<div className="flex w-[16rem] gap-4 items-center justify-center p-2 rounded-md shadow-md shadow-bgDefault flex-grow flex-shrink flex-basis-1/2 h-[6rem]  bg-white">
					<Phone size={32} />
					<p className="flex flex-wrap w-[10rem]">
						<a href="tel:+902842128516">+90 284 212 85 16</a>
					</p>
				</div>
				<div className="flex w-[16rem] gap-4 items-center justify-center p-2 rounded-md shadow-md shadow-bgDefault flex-grow flex-shrink flex-basis-1/2 h-[6rem]  bg-white">
					<Mail size={32} />
					<p className="flex flex-wrap w-[10rem]">
						<a href="mailto: edirnesydv@gmail.com">edirnesydv@gmail.com</a>
					</p>
				</div>
			</div>
		</div>;
};

export default ContactFooter;

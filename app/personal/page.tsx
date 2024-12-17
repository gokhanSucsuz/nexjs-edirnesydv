import Image from "next/image";
import React from "react";

const PersonalPage = () => {
	return (
		<div>
			<h1>Personal Page</h1>
			<div className="flex flex-wrap mx-auto items-center justify-center py-8 my-8 gap-4">
				<div className="flex items-center justify-center w-[6em] h-[8em]">
					<Image
						src="/no-image.svg"
						alt="no-image"
						width={1000}
						height={1000}
						className="w-full h-full object-cover rounded-xl "
					/>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p>Personal Name</p>
					<p>Personel Ünvanı</p>
					<p>Personal Eğitim Durumu</p>
				</div>
			</div>
		</div>
	);
};

export default PersonalPage;

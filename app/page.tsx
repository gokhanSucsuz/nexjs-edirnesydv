import { Slider } from "@/components/Slider";
import { Announcements } from "../components/annoncement/AnnounceOrientation";
import { AidCards } from "@/components/aid/AidCards";
import Gallery from "@/components/gallery/gallery";
import Banners from "@/components/banners/banner";
import VakifCards from "@/components/vakif/VakifCards";

export default async function Home() {
	return (
		<main className="flex flex-col w-full gap-8 mx-auto">
			<Slider />
			<VakifCards />
			<Announcements />
			<AidCards />
			<Gallery />
			<Banners />
		</main>
	);
}

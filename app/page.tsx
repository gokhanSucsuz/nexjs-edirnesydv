import { Slider } from "@/components/Slider";
import { AidCards } from "@/components/aid/AidCards";
import Gallery from "@/components/gallery/gallery";
import Banners from "@/components/banners/banner";
import VakifCards from "@/components/managers/ManagerCards";

export default async function Home() {
	return (
		<main className="flex flex-col w-full gap-8 mx-auto">
			<Slider />
			<VakifCards />
			<AidCards />
			<Gallery />
			<Banners />
		</main>
	);
}

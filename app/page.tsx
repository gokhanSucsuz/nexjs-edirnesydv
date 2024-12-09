import { Slider } from "@/components/Slider";
import { CarouselOrientation } from "../components/annoncement/AnnounceOrientation";
import { AidCards } from "@/components/aid/AidCards";
import Gallery from "@/components/gallery/gallery";
import Banners from "@/components/banners/banner";

export default async function Home() {
	return <main className="flex flex-col w-full gap-8 mx-auto">
			<Slider />
			<CarouselOrientation />
			<AidCards />
			<Gallery />
			<Banners />
		</main>;
}

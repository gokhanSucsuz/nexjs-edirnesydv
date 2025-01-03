import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	ZoomControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { icon } from "leaflet";

const iconUrl =
	"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
	iconUrl: iconUrl,
	iconSize: [20, 30]
});

export default function MyMap({
	page,
	location
}: {
	page: boolean;
	location?: [number, number];
}) {
	const defaultLocation = [41.679422489582436, 26.555350374890356] as [
		number,
		number
	];
	return (
		<MapContainer
			center={location ? location : defaultLocation}
			zoom={16}
			zoomControl={false}
			scrollWheelZoom={false}
			className={`${page
				? "w-full h-[40em]"
				: "basis-44 h-[25em] "} rounded z-0`}
		>
			<TileLayer
				attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<ZoomControl position="topright" />
			<Marker
				position={location ? location : defaultLocation}
				icon={markerIcon}
			>
				<Popup>
					T.C. <br /> Edirne Valiliği <br /> Sosyal Yardımlaşma ve Dayanışma
					Vakfı Başkanlığı
				</Popup>
			</Marker>
		</MapContainer>
	);
}

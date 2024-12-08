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

export default function MyMap() {
	const defaultLocation = [41.679422489582436, 26.555350374890356] as [
		number,
		number
	];
	return (
		<MapContainer
			center={defaultLocation}
			zoom={16}
			zoomControl={false}
			scrollWheelZoom={false}
			className="w-[240px] h-[200px] sm:w-[500px] rounded"
		>
			<TileLayer
				attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<ZoomControl position="topright" />
			<Marker position={defaultLocation} icon={markerIcon}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
}
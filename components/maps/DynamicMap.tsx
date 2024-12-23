"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const DynamicMap = ({
	page,
	location
}: {
	page: boolean;
	location?: [number, number];
}) => {
	const Map = useMemo(
		() =>
			dynamic(() => import("@/components/maps/Map"), {
				loading: () => <p>A map is loading</p>,
				ssr: false
			}),
		[]
	);

	return (
		<div>
			<Map page={page} location={location} />
		</div>
	);
};
export default DynamicMap;

"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const DynamicMap = ({ page }: { page: boolean }) => {
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
			<Map page={page} />
		</div>
	);
};
export default DynamicMap;

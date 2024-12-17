import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchDataFromStrapi(route: string) {
	const url = `${BASE_URL}/api${route}`;
	try {
		const response = await axios.get(url);
		return response.data.data;
	} catch (error) {
		console.log("Could not fetch data from api!", error);
		throw new Error(`Could not fetch data from ${url}!`);
	}
}

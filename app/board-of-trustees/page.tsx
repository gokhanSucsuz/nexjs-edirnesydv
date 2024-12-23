import { fetchDataFromStrapi } from "@/utils/strapi";

type BoardOfTrusteesType = {
	memberName: string;
	memberOrganisation: string;
	memberTitle: string;
	documentId: string;
};

export default async function BoardOfTrusteesPage() {
	const data = await fetchDataFromStrapi(
		"/boardoftrustees?populate=*&sort=createdAt:asc"
	);
	const filteredData = data.map((item: BoardOfTrusteesType) => item);
	return (
		<div className="container mx-auto py-10 text-white text-center">
			<h1 className="text-2xl font-bold mb-4 text-bgDefault">
				Mütevelli Heyeti
			</h1>
			<div className="flex flex-wrap gap-4">
				{filteredData.map((item: BoardOfTrusteesType, index: number) => {
					return (
						<div
							key={item.documentId}
							className="bg-red-400 rounded-lg shadow-md p-4 m-2 flex flex-col gap-2"
						>
							<div className="flex gap-2 items-center">
								<h1 className="text-lg font-bold">
									{index + 1})
								</h1>
								<h2 className="">
									{item.memberName} - {item.memberOrganisation}
								</h2>
							</div>
							<p className="text-lg font-semibold">
								{item.memberTitle}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

import { fetchDataFromStrapi } from "@/utils/strapi";
import Link from "next/link";
import React from "react";

type HelpTypes = {
    documentId: string;
    typeOf: string;
    program: string;
    scope: string;
    whoCanBenefit: string;
    requireDocs: string;
    amount: string;
    paymentPeriod: string;
    applicant: string;
    createdAt: string;
}
const AidPage = async () => {
	const helps = await fetchDataFromStrapi("/help-types?populate=*");

	return <div className="flex flex-wrap flex-col  mx-auto flex-grow flex-shrink py-8 shadow-lg  shadow-bgDefault">
		<h1 className="text-center m-4 p-4 rounded-lg text-white bg-bgDefault uppercase font-extrabold ">Tüm Yardımlar</h1>
				<div className="flex flex-wrap mx-auto flex-grow flex-shrink ">
            {helps.map((help:HelpTypes)=>(
                <Link href={`/aid/${help.documentId}`} key={help.documentId} className="flex rounded-lg p-3 shadow-lg ">
                    <h1 className="uppercase font-extrabold  text-bgDefault">{help?.program}</h1>
                </Link>
            ))}
		</div>
	</div>;
			
};

export default AidPage;

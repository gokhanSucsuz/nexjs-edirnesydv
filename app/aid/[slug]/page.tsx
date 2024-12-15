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


type ParamsType = Promise<{ slug: string }>;

const AidPage = async ({ params }: { params: ParamsType }) => {
	const { slug } = await params;
	const helps = await fetchDataFromStrapi(
		"/help-types?populate=*&sort=typeOf:asc"
	);
	const aid = helps.find((help: HelpTypes) => {
		return help.documentId === slug;
    });
    const amountAid = aid.amount.split("\n").map((amount: HelpTypes) => amount);


	return (
		<div className="flex flex-col md:flex-row w-[96%] flex-wrap mx-auto gap-2 md:gap-4 text-xs sm:text-sm md:text-base lg:text-lg px-2 ">
			<div className="flex flex-col p-4 my-8 mx-auto  shadow-xl shadow-red-200 rounded-lg basis-[27em] lg:basis-[36em] flex-grow flex-shrink">
                
                <h1 className="uppercase font-extrabold py-4  text-bgDefault">{aid?.program}</h1>
                <ul>
                    <li className="py-2"><span className="font-bold capitalize">Yardım türü: </span>{aid?.typeOf}</li>
                    <li className="py-2"><span className="font-bold capitalize">Yardım kapsamı: </span>{aid?.scope}</li> 
                    <li className="py-2"><span className="font-bold capitalize">Başvuran: </span>{aid?.applicant}</li>
                    <li className="py-2"><span className="font-bold capitalize">Kimler faydalanabilir?: </span>{aid?.whoCanBenefit}</li>
                    <li className="py-2"><span className="font-bold capitalize">Gerekli belgeler: </span>{aid?.requiredDocs}</li>
                    <li className="py-2"><span className="font-bold capitalize">Miktar: </span>{amountAid.map((amount: string) => <p key={amount}>{amount}</p>)}</li>
                    <li className="py-2"><span className="font-bold capitalize">Ödeme periyodu: </span>{aid?.paymentPeriod}</li>
                    
                </ul>
                
			</div>
			<div className="flex  flex-wrap flex-row md:flex-col mx-auto  flex-grow flex-shrink">
				<div className="flex flex-wrap flex-row md:flex-col mx-auto  flex-grow flex-shrink ">
            {helps.map((help:HelpTypes)=>(
                <Link href={`/aid/${help.documentId}`} key={help.documentId} className="flex flex-col rounded-lg p-3 shadow-lg items-center ">
                    <h1 className="uppercase font-extrabold  text-bgDefault">{help?.program}</h1>
                </Link>
            ))}
            </div>
			</div>
		</div>
	);
};

export default AidPage;

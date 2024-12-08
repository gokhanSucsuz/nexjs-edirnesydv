import { helpPrograms } from "@/utils/functions";
import React from "react";

type ParamsType = Promise<{ slug: string }>;

const AidPage = async ({
	params
}: {
	params: ParamsType
}) => {
    const { slug } = await params;
    const aid = helpPrograms.find(p => {
        return p.link === `/aid/${slug?.toString()}`
    })

   
    return <div>
        {aid?.name}
    </div>
};

export default AidPage;

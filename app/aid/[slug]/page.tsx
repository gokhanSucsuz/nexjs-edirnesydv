import { helpPrograms } from "@/utils/functions";
import { Params } from "next/dist/server/request/params";
import React from "react";

const AidPage = async ({
	params
}: {
	params: Params;
}) => {
    const { slug } = await params;
    const aid = helpPrograms.find(p => {
        return p.link === `/aid/${slug?.toString()}`
    })

   
    return <div>
        aid page
    </div>
};

export default AidPage;

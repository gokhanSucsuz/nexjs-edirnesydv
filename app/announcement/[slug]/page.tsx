import { dateFormat } from "@/utils/dateFormat";
import { fetchDataFromStrapi } from "@/utils/strapi";
import Link from "next/link";
import React from "react";

type AnnounceTypes = {
  documentId: string;
  title: string;
  content: [
    {
      children?: [
        {
          text?: string;
        }
      ];
    }
  ];
  createdAt: string;
  program?: string;
};

type ParamsType = Promise<{ slug: string }>;

const AnnouncementPage = async ({ params }: { params: ParamsType }) => {
	const { slug } = await params;
  const announcements = await fetchDataFromStrapi(
    "/announcements?populate=*&sort=createdAt:desc"
  );

  const announce = announcements.find((announce: AnnounceTypes) => {
    return announce.documentId === slug;
  });

  return (
    <div className="flex flex-col md:flex-row w-[96%] flex-wrap mx-auto gap-2 md:gap-4 text-xs sm:text-sm md:text-base lg:text-lg px-2 mb-8">
      <div className="flex flex-col p-4 my-8 mx-auto shadow-xl shadow-red-200 rounded-lg basis-[27em] lg:basis-[36em] flex-grow flex-shrink">
        <h1 className="uppercase font-extrabold py-4 text-bgDefault">
          {announce?.title || "Program Not Available"}
        </h1>
        <ul>
          <li className="py-2 font-semibold capitalize">
  {announce?.content &&
    announce.content.map((item:{ children?: { text?: string }[] }) => item?.children?.[0]?.text || "No content available")}
</li>
          <li className="py-2 font-normal capitalize">
            {dateFormat(announce?.createdAt || "")}
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap flex-col mx-auto flex-grow flex-shrink">
          {announcements.map((announce: AnnounceTypes) => (
            <Link
              href={`/announcement/${announce.documentId}`}
              key={announce.documentId}
              className="flex flex-col rounded-lg p-3 shadow-lg"
            >
              <h1 className="uppercase font-extrabold text-bgDefault">
                {announce?.title}
              </h1>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default AnnouncementPage;

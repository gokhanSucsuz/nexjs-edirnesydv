import { dateFormat } from "@/utils/dateFormat";
import { fetchDataFromStrapi } from "@/utils/strapi";
import Image from "next/image";
import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import Link from "next/link";

interface Article {
	documentId: string;
	title: string;
    content: [
        {
            children?: [
                {
                    text:string
                }
            ]
        }
    ]
    image: {
        url?: string;
        name?: string;
    }
    otherImages?: [
        {
            url?: string;
            name?: string;
            documentId?: string;
            mime?: string;
        }
    ]
	createdAt: string;
}

type ParamsType = Promise<{ slug: string }>;

const ArticlePage = async ({ params }: { params: ParamsType }) => {
	const { slug } = await params;
	const articles:Article[] = await fetchDataFromStrapi("/articles?populate=*");
    const article = articles.find((a: Article) => a.documentId === slug);
    const latestArticles = await fetchDataFromStrapi("/articles?populate=*&sort[0]=createdAt:desc&pagination[limit]=3");
	return (
        <div className="flex flex-col md:flex-row w-[96%] flex-wrap mx-auto gap-2 md:gap-4 text-xs sm:text-sm md:text-base lg:text-lg px-2 ">
        <div className="flex flex-col p-4 my-8 mx-auto  shadow-xl shadow-red-200 rounded-lg basis-[27em] lg:basis-[36em] flex-grow flex-shrink">
            <h1 className="uppercase font-extrabold py-4  text-bgDefault">{article?.title}</h1>
            <Image src={article?.image && `${process.env.NEXT_PUBLIC_STRAPI_URL}${article?.image.url}` || "/no-image.svg"} alt={article?.image?.name || ""} width={1000} height={600} className="w-[45em] h-auto object-cover  rounded-xl mb-8 " />
            <p>{article?.content.map((c:any)=> c.children[0].text || "").join(" ")}</p>
                <span>{article && dateFormat(article?.createdAt)}</span>
                    
                <div className="flex flex-row flex-wrap gap-2 py-4">
                    {article?.otherImages && article?.otherImages?.map((image: any) => 
                    {
                        if (image.mime === "video/mp4") return null;
                        return (
                            <div key={image.url} className="basis-[10em] flex-grow flex-shrink">
						<Dialog>
							<DialogTrigger>
								<Image src={image && `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}` || "/no-image.svg"} alt={image?.name || ""} width={1000} height={600} className="object-cover aspect-square  rounded-xl mb-8 " />
							</DialogTrigger>
							<DialogContent className="w-full h-[30vh] sm:h-[50vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] bg-bgDefault bg-opacity-60 flex items-center justify-center ">
								<DialogHeader className="hidden">
									<DialogTitle></DialogTitle>
									<DialogDescription>
									</DialogDescription>
								</DialogHeader>
								<Image src={image && `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}` || "/no-image.svg"} alt={image?.name || ""} width={1000} height={600} className="w-full h-auto object-cover  rounded-xl my-8 " />
							</DialogContent>
						</Dialog>
					</div>
                        )
                    })}
                    {article?.otherImages && article?.otherImages?.map((img: any) => {
                        if (img.mime !== "video/mp4") return null;
                        return <div key={img && img?.url} className="basis-[10em] flex-grow flex-shrink">
                        <video controls className="w-full h-auto object-cover  rounded-xl my-8 " src={img && `${process.env.NEXT_PUBLIC_STRAPI_URL}${img?.url}`} />
                        </div>}
                    ) }
                     </div>
            </div>
            <div className="flex flex-wrap flex-row md:flex-col mx-auto basis-[12em] flex-grow flex-shrink">
            {latestArticles && latestArticles.map((a:Article)=>(
                <Link href={`/articles/${a.documentId}`} key={a.documentId} className="flex flex-col p-2 my-4 mx-auto shadow-xl shadow-red-200 rounded-lg basis-[12em] flex-grow flex-shrink">
                    <h1 className="uppercase font-extrabold py-4 text-bgDefault">{a?.title}</h1>
                    <Image src={a?.image && `${process.env.NEXT_PUBLIC_STRAPI_URL}${a?.image.url}` || "/no-image.svg"} alt={a?.image?.name || ""} width={1000} height={600} className="w-[45em] h-auto object-cover  rounded-xl mb-8 " />
                    <p className="line-clamp-3">{a?.content.map((c:any)=> c.children[0].text)}</p>
                    <span>{a && dateFormat(a?.createdAt)}</span>
                </Link>
            ))}
            </div>
        </div>
	);
};

export default ArticlePage;
"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem
} from "@/components/ui/carousel";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { fetchDataFromStrapi } from "@/utils/strapi";
import { dateFormat } from "@/utils/dateFormat";

interface ArticleType {
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
	date: string;
	createdAt: string;
}

export function Slider() {
	const [articles, setArticles] = React.useState<ArticleType[]>([]);
	React.useEffect(() => {
		const fetchData = async () => {
			const articles = await fetchDataFromStrapi(
				"/articles?populate=*&sort=createdAt:desc"
			);
			setArticles(articles);
		};
		fetchData();
	}, []);
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true, playOnInit: true })
	);

	return (
		<section className="flex w-full">
			<Carousel
				plugins={[plugin.current]}
				className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full rounded-lg"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{articles?.map((article: ArticleType, index) =>
						<CarouselItem key={index}>
							<div className="bg-slate-500 rounded-xl">
								<div className="relative rounded-xl">
									<div className="relative">
										<Image
											src={article?.image?.url ? process.env.NEXT_PUBLIC_STRAPI_URL + article?.image?.url : "/no_image.svg"}
											alt="alt"
											width={1000}
											height={1000}
											className=" object-cover rounded-md mx-auto h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full bg-white "
											priority
											loading="eager"
										/>
									</div>
									<div className="absolute top-[70%] bg-slate-900 opacity-75 w-full h-[calc(100%-70%)] flex rounded-lg">
										<Link
											href={`/articles/${article.documentId}`}
											className="text-white px-8 py-2 text-xs sm:text-sm md:text-base lg:text-xl hover:underline"
										>
											<p className="font-extrabold">
												{article.title}
											</p>
											<p className="leading-snug line-clamp-2">
											{article?.content?.[0]?.children?.[0]?.text || "No content available"}
											</p>
										</Link>
										<div className="absolute top-[80%] left-8 text-white text-xs sm:text-sm ">
											<div className="flex items-center gap-2">
												<Calendar size={16} />
												<span>
													{dateFormat(article?.date)}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					)}
				</CarouselContent>
			</Carousel>
		</section>
	);
}

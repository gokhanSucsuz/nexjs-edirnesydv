"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronRight } from "lucide-react";
import { fetchDataFromStrapi } from "@/utils/strapi";

type SodamType = {
	documentId: string;
	name: string;
	email: string;
	info: string;
};

const Nav = () => {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [sodams, setSodams] = useState([]);

	useEffect(() => {
		const sodams = async () => {
			const data = await fetchDataFromStrapi("/sodam-centers?populate=*");
			setSodams(data);
		};
		sodams();
	}, []);

	return (
		<header>
			<nav className="hidden sm:flex items-center justify-center gap-4 py-2 bg-bgDefault text-white  text-xs md:text-sm lg:text-base font-bold">
				<Link
					href="/"
					className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg"
				>
					anasayfa
				</Link>
				<div className="uppercase p-2 rounded-lg hover:bg-white hover:text-bgDefault">
					<DropdownMenu open={open2} onOpenChange={setOpen2}>
						<DropdownMenuTrigger className="uppercase cursor-pointer ">
							<Link href="/corporate">kurumsal</Link>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/foundationManager" onClick={() => setOpen2(false)}>
									Vakıf Müdürü
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/employee" onClick={() => setOpen2(false)}>
									Vakıf Çalışanları
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/workers" onClick={() => setOpen2(false)}>
									Proje Çalışanları
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/board-of-trustees" onClick={() => setOpen2(false)}>
									mutevelli heyeti
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/about" onClick={() => setOpen2(false)}>
									hakkımızda
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<Link
					href="/activities"
					className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg"
				>
					faaliyetler
				</Link>
				<Link
					href="/aid"
					className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg"
				>
					yardımlar
				</Link>
				<Link
					href="/contact"
					className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg"
				>
					iletişim
				</Link>
				<div className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg">
					<DropdownMenu open={open3} onOpenChange={setOpen3}>
						<DropdownMenuTrigger className="uppercase cursor-pointer">
							<Link href="/sodamCenter">sodam merkezleri</Link>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{sodams.map((sodam: SodamType) =>
								<DropdownMenuItem key={sodam.documentId}>
									<Link
										href={`/sodamCenter/${sodam.documentId}`}
										className="uppercase"
										onClick={() => setOpen3(false)}
									>
										{sodam.name}
									</Link>
								</DropdownMenuItem>
							)}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>
			<nav
				className="flex sm:hidden items-center justify-end absolute top-0 right-[40%] text-xs font-bold "
				suppressHydrationWarning
			>
				<Sheet open={open} onOpenChange={() => setOpen(value => !value)}>
					<SheetTrigger asChild>
						<Button variant="outline" size={"icon"}>
							<GiHamburgerMenu />
						</Button>
					</SheetTrigger>
					<SheetContent
						side={"left"}
						className="bg-bgDefault text-white rounded-br-3xl rounded-tr-3xl text-xs bg-opacity-75 "
					>
						<SheetHeader>
							<SheetTitle className="text-slate-150">Edirne SYDV</SheetTitle>
							<SheetDescription className="text-slate-200">
								Mobile Menu Links
							</SheetDescription>
						</SheetHeader>
						<div className="flex flex-col gap-4 py-8">
							<Link
								href="/"
								className="uppercase cursor-pointer"
								onClick={() => setOpen(false)}
							>
								anasayfa
							</Link>
							<Accordion type="multiple">
								<AccordionItem value="item-1">
									<AccordionTrigger>KURUMSAL</AccordionTrigger>
									<AccordionContent className="flex flex-col gap-4 text-xs">
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/foundationManager"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												vakif müdürü
											</Link>
										</span>
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/employee"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												vakif çalışanları
											</Link>
										</span>
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/workers"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												proje çalışanları
											</Link>
										</span>
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/board-of-trustees"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												mütevelli heyeti
											</Link>
										</span>
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/about"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												hakkımızda
											</Link>
										</span>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
							<Link
								href="/corporate"
								className="uppercase"
								onClick={() => setOpen(false)}
							>
								kurumsal
							</Link>
							<Link
								href="/activities"
								className="uppercase"
								onClick={() => setOpen(false)}
							>
								faaliyetler
							</Link>
							<Link
								href="/aid"
								className="uppercase"
								onClick={() => setOpen(false)}
							>
								yardımlar
							</Link>
							<Link
								href="/contact"
								className="uppercase"
								onClick={() => setOpen(false)}
							>
								iletişim
							</Link>
							<Accordion type="multiple">
								<AccordionItem value="item-1">
									<AccordionTrigger>SODAM MERKEZLERİ</AccordionTrigger>
									<AccordionContent className="flex flex-col gap-4 text-xs">
										{sodams.map((sodam: SodamType) =>
											<span
												key={sodam.documentId}
												className="flex gap-2 hover:underline"
											>
												<ChevronRight className="w-4 h-4" />
												<Link
													href={`/sodamCenter/${sodam.documentId}`}
													className="uppercase cursor-pointer"
													onClick={() => setOpen(false)}
												>
													{sodam.name}
												</Link>
											</span>
										)}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
};

export default Nav;

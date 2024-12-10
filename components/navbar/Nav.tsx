"use client";
import Link from "next/link";
import React, { useState } from "react";
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

const Nav = () => {
	const [open, setOpen] = useState(false);
	return (
		<header>
			<nav className="hidden sm:flex items-center justify-center gap-4 py-4 bg-bgDefault text-white  text-xs md:text-sm lg:text-base font-bold">
				<Link
					href="/"
					className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg"
				>
					anasayfa
				</Link>
				<div className="uppercase p-2 rounded-lg hover:bg-white hover:text-bgDefault">
					<DropdownMenu>
						<DropdownMenuTrigger className="uppercase cursor-pointer ">
							<Link href="/corporate">kurumsal</Link>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/corporate">kurumsal</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/mutevelli-heyeti">mutevelli heyet</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/vakif-muduru">vakıf müdürü</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href={"/vakif-birimleri"}>vakıf birimleri</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
								<Link href="/hakkimizda">hakkımızda</Link>
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
					<DropdownMenu>
						<DropdownMenuTrigger className="uppercase cursor-pointer">
							<Link href="/sodamCenter">sodam merkezleri</Link>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer">
								<Link href="/merkez-sodam">merkez sodam</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer">
								<Link href="/sehit-mustafa-tezgider-sodam">
									şehit mustafa tezgider sodam
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="uppercase cursor-pointer">
								<Link href="/sehit-ozer-camci-sodam">
									şehit özer camcı sodam
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>
			<nav
				className="flex sm:hidden items-center justify-end absolute top-0 right-[40%] py-1 bg-bgDefault text-xs font-bold "
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
												href="/corporate"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												kurumsal
											</Link>
										</span>
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/mutevelli-heyeti"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												mütevelli heyeti
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
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/kurumsal"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												merkez sodam
											</Link>
										</span>
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/sehit-mustafa-tezgider-sodam"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												şehit mustafa tezgider sodam
											</Link>
										</span>
										<span className="flex gap-2 hover:underline">
											<ChevronRight className="w-4 h-4" />
											<Link
												href="/sehit-ozer-camci-sodam"
												className="uppercase cursor-pointer"
												onClick={() => setOpen(false)}
											>
												şehit özer camcı sodam
											</Link>
										</span>
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

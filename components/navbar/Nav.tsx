"use client"
import Link from "next/link";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
	return (
        <>
        <nav className="hidden sm:flex items-center justify-center gap-4 py-4 bg-bgDefault text-white rounded-br-3xl text-xs md:text-sm lg:text-base font-bold">
			<Link href="/" className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg">
				anasayfa
			</Link>
			<div className="uppercase p-2 rounded-lg hover:bg-white hover:text-bgDefault">
				<DropdownMenu>
					<DropdownMenuTrigger className="uppercase cursor-pointer ">
						Kurumsal
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
							vakıf başkanı
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
							mütevelli heyeti
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
							vakıf müdürü
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
							vakıf birimleri
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="uppercase cursor-pointer p-2 rounded-lg">
							hakkımızda
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<Link href="/" className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg">
				faaliyetler
			</Link>
			<Link href="/" className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg">
				yardımlar
			</Link>
			<Link href="/" className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg">
				iletişim
			</Link>
			<div className="uppercase hover:bg-white hover:text-bgDefault p-2 rounded-lg">
				<DropdownMenu>
					<DropdownMenuTrigger className="uppercase cursor-pointer">
						sodamlar
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="uppercase cursor-pointer">
							merkez sodam
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="uppercase cursor-pointer">
							şehit mustafa tezgider sodam
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="uppercase cursor-pointer">
							şehit özer camcı sodam
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
            </nav>
            <nav className="flex sm:hidden items-center justify-end absolute top-8 right-1 pt-1">
    <Sheet>
      <SheetTrigger asChild >
                    <Button variant="outline" size={"icon"}>
                       <GiHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} >
        <SheetHeader>
          <SheetTitle>Mobile Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-8">
            <Link href="/" className="uppercase cursor-pointer">
                anasayfa
            </Link>
            <Link href="/" className="uppercase">
                kurumsal
            </Link>
            <Link href="/" className="uppercase">
                faaliyetler
            </Link>
            <Link href="/" className="uppercase">
                yardımlar
            </Link>
            <Link href="/" className="uppercase">
                iletişim
            </Link>
            <Link href="/" className="uppercase">
                sodamlar
            </Link>
        </div>
      </SheetContent>
    </Sheet>
            </nav>
            
        </>
	);
};

export default Nav;

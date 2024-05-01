import Image from "next/image";
import LogoSvg from "@/assets/logo.svg";
import UpArrowCircle from "@/assets/up-arow-circle.svg";
import { titleFont } from "./fonts";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex justify-between items-center">
			<div className="flex justify-center items-center gap-2">
				<Image
					className="md:h-[50px] md:w-[50px]"
					src={LogoSvg}
					alt="logo"
					width={40}
					height={40}
				/>
				<h1 className={cn("text-xl md:text-3xl", titleFont.className)}>
					Whisper Verse
				</h1>
			</div>
			<Link href="/new">
				<Button size="sm">
					<Image
						className="text-white"
						src={UpArrowCircle}
						alt="logo"
						width={14}
						height={14}
					/>
					Share Your Story
				</Button>
			</Link>
		</header>
	);
}

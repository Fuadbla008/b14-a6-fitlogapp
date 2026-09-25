"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import Logo from '../../public/logo.png'



export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Workouts", href: "/" },
        { name: "My Plan", href: "/my-plan" },
    ];


    const planCount = 0;
    const savedCount = 0;

    return (
        <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/95 backdrop-blur border-b border-white/5">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="this is fit logo icon"/>
                    <span className="text-lg font-extrabold tracking-wider text-white uppercase">
                        FitLog
                    </span>
                </Link>

                <ul className="hidden md:flex items-center gap-6">
                    {links.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive
                                            ? "bg-[#ccff00]/15 text-[#ccff00]"
                                            : "text-zinc-400 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-5">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 group"
                        aria-label="Today's plan count"
                    >
                        <span className="text-sm text-zinc-300 group-hover:text-white">
                            Plan
                        </span>
                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-xs font-bold text-black">
                            {planCount}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 group"
                        aria-label="Saved workouts count"
                    >
                        <span className="text-sm text-zinc-300 group-hover:text-white">
                            Saved
                        </span>
                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-zinc-600 px-1.5 text-xs font-bold text-white">
                            {savedCount}
                        </span>
                    </Link>
                </div>
            </nav>

            <div className="md:hidden border-t border-white/5 px-4 py-2 flex justify-center gap-3">
                {links.map((link) => {
                    const isActive =
                        link.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive
                                    ? "bg-[#ccff00]/15 text-[#ccff00]"
                                    : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>
        </header>
    );
}
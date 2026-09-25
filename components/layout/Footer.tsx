import Link from "next/link";
import Logo from '../../public/logo.png'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0a0a] mt-20">
      <div className="mx-auto flex  flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="this is logo branding image"></Image>
          <span className="text-sm font-extrabold tracking-wider text-white uppercase">
            FitLog
          </span>
        </Link>

        <p className="text-xs sm:text-sm text-zinc-500 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}
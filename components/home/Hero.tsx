"use client";

import Image from "next/image";
import Link from "next/link";
import Banner from "../../public/banner.png"

export default function Hero() {
  return (
    <section className="mx-auto  px-4 sm:px-6 lg:px-8 pt-10">

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#ccff00] uppercase">
              Workout Library
            </p>

            <h1 className="font-oswald mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] text-white">
              Train with intent. <br />
              Log every set.
            </h1>

            <p className="mt-5 max-w-lg text-sm sm:text-base text-zinc-400 leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <div className="mt-8">
              <Link
                href="#library"
                className="inline-flex items-center justify-center rounded-md bg-[#ccff00] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02]"
              >
                Browse Workouts
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src={Banner}
                alt="Workout illustration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
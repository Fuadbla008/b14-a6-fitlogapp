import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">

      <h1 className="font-display text-[100px] sm:text-[140px] font-bold leading-none text-[#ccff00]">
        404
      </h1>

      <h2 className="mt-4 text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-sm text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back to training.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#ccff00] px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02]"
      >
        Back to Home
      </Link>

    </div>
  );
}
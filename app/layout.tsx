import type { Metadata } from "next";
import {Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PlanProvider } from "@/context/PlanContext";
import { ToastProvider } from "@/context/ToastContext";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // আপনার প্রয়োজনীয় weight গুলো দিন
  variable: '--font-oswald',      // CSS Variable নাম
  display: 'fallback',           // ফন্ট লোড হওয়ার পূর্ব পর্যন্ত fallback ফন্ট দেখাবে
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable}`}>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased min-h-screen flex flex-col">
        <PlanProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </PlanProvider>
      </body>
    </html>
  );
}
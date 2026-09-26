import Hero from "@/components/home/Hero";
import Library from "@/components/home/Library";
import type { Workout } from "@/types";
import { Suspense } from "react";
import Loading from "./loading";

async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading></Loading>}>
        <Library workouts={workouts} />
      </Suspense>
    </div>
  );
}
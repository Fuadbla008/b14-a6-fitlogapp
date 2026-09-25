import WorkoutDetails from "@/components/workout/WorkoutDetails";
import type { Workout } from "@/types";

async function getWorkout(id: string): Promise<Workout> {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Workout not found");
  return res.json();
}

export default async function WorkoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return <WorkoutDetails workout={workout} />;
}
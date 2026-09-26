"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Workout } from "@/types";

type PlanContextType = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (w: Workout) => void;
  saveForLater: (w: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
};

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const storedPlan = localStorage.getItem("fitlog_plan");
        const storedSaved = localStorage.getItem("fitlog_saved");
        if (storedPlan) setPlan(JSON.parse(storedPlan));
        if (storedSaved) setSaved(JSON.parse(storedSaved));
      } catch {

      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved]);

  function addToPlan(workout: Workout) {
    setPlan((prev) => {
      if (prev.find((w) => w.id === workout.id)) return prev;
      if (prev.length >= 5) return prev;
      return [...prev, workout];
    });
  }

  function saveForLater(workout: Workout) {
    setSaved((prev) => {
      if (prev.find((w) => w.id === workout.id)) return prev;
      return [...prev, workout];
    });
  }

  function removeFromPlan(id: number) {
    setPlan((prev) => prev.filter((w) => w.id !== id));
  }

  function removeFromSaved(id: number) {
    setSaved((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <PlanContext.Provider
      value={{ plan, saved, addToPlan, saveForLater, removeFromPlan, removeFromSaved }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside PlanProvider");
  return ctx;
}
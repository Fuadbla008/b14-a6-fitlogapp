<div align="center">

# 💪 FitLog

### A dark, no-nonsense gym companion — pick a lift, lock it into today's plan, and watch the week's work add up.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Live Demo](https://getfitpro.vercel.app) • [Report Bug](https://github.com/Fuadbla008/b14-a6-fitlogapp/issues) • [Request Feature](https://github.com/Fuadbla008/b14-a6-fitlogapp/issues)

</div>

---

## 📖 About

**FitLog** is a modern, responsive fitness companion app built with **Next.js 16 App Router** and **Tailwind CSS**. It lets you browse a curated workout library, view detailed instructions for each lift, plan up to 5 workouts for the day, and save workouts for later — all persisted in `localStorage` so nothing is lost between visits.

Designed with a bold, dark UI and a signature neon-green accent (`#ccff00`), FitLog is built for people who take their training seriously and want a clean, no-nonsense experience.

---

## ✨ Key Features

1. **🔝 Dynamic Navbar with Live Counters** — Sticky navbar with active-link highlighting and real-time **Plan** & **Saved** badge counters that update instantly as you add or remove workouts.
2. **🏋️ Workout Library** — Fully responsive 3-column grid (12 lifts) with image cards showing muscle group tags, equipment, duration, calories, and rating. Fully powered by a live API.
3. **📋 Detailed Workout View** — Two-column layout featuring workout image, muscle groups, a full specs table (equipment, difficulty, sets, reps, duration, calories, rating), step-by-step instructions, and action buttons.
4. **📅 My Plan Page with Tabs & Sorting** — Two tabs (**Today's Plan** / **Saved**) with a **Sort By** dropdown (Duration / Calories / Rating). Live-updating metrics summary for Exercises, Minutes, and Calories.
5. **✅ Mark as Done & Remove** — Each planned workout can be marked complete or removed via dedicated buttons, with toast notifications and instant localStorage persistence.

---

## 🧠 Additional Features

- 🔔 **Toast Notifications** — Context-driven toast system for every action (added, removed, marked done).
- 💾 **localStorage Persistence** — Plan and saved data survive page reloads and browser restarts.
- 🎯 **5-Lift Cap** — "Add to today's plan" button automatically disables when 5 lifts are reached.
- 🚫 **404 Page** — Custom not-found page for unknown routes.
- ⏳ **Loading Skeletons** — Streaming loading UI while workout data is being fetched.
- 📱 **Fully Responsive** — Mobile, tablet, and desktop layouts — no compromise.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 16 (App Router)** | Framework — routing, server components, streaming |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling and responsive design |
| **@boxicons/react** | Icon library |
| **React Context API** | Global state (plan, saved, toast) |
| **localStorage** | Client-side persistence |
| **Vercel** | Deployment platform |

---

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `v20.9.0` or later
- **npm** or **yarn** or **pnpm**

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fitlog.git
cd fitlog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev

```

Open http://localhost:3000 in your browser. The app will hot-reload as you edit files.

### 4. Build for production

```bash
npm run build
npm start
```


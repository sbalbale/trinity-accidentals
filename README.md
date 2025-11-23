# The Trinity College Accidentals | Digital Heritage Platform

![Status](https://img.shields.io/badge/status-active_development-success)
![Stack](https://img.shields.io/badge/stack-Next.js_|_Sanity_|_Firebase-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

**The official "Digital Heritage" archive and recruitment engine for the Trinity College Accidentals (Est. 1993).**

## 📖 Project Overview

This is not just a website; it is a **Headless Digital Archive** designed to preserve the 30-year legacy of Trinity's premier all-male a cappella group. It solves the "Student Group Problem"—where institutional history is lost due to high member turnover and lost passwords—by decoupling the **Content** (History) from the **Code** (Presentation).

### Key Features

- **Zero-Cost Architecture:** Runs entirely on "Free Tier" infrastructure (Firebase Spark + Sanity Free).
- **Structured Archive:** Members, Songs, and Albums are linked data entities, not just text on a page.
- **Performance:** Static Site Generation (SSG) ensures sub-second page loads.
- **Recruitment Funnel:** Dedicated "Audition Mode" to capture prospective interest.

---

## 🏗️ Technical Architecture

This project is structured as a **Monorepo** to maintain type safety between the Content Management System (CMS) and the Frontend.

| Component    | Tech Stack          | Responsibility                                                              |
| :----------- | :------------------ | :-------------------------------------------------------------------------- |
| **Frontend** | **Next.js (React)** | Renders the UI. Uses `getStaticProps` to build HTML pages at compile time.  |
| **CMS**      | **Sanity.io**       | The "Database" and Admin Dashboard. Stores JSON data for members and songs. |
| **Hosting**  | **Firebase**        | Hosts the static HTML/CSS/JS files on Google's global CDN.                  |
| **Styling**  | **Tailwind CSS**    | Implements the official Trinity College Brand Identity (PMS 287 C).         |

---

## 📂 Repository Structure

We use **NPM Workspaces** to manage dependencies.

```text
trinity-accidentals/
├── package.json        # Root configuration & workspace scripts
├── .firebaserc         # Firebase project aliases
├── web/                # WORKSPACE: The Frontend Website
│   ├── src/            # Components & Pages
│   ├── public/         # Static assets (Logos, Robots.txt)
│   └── next.config.js  # Build configuration
└── studio/             # WORKSPACE: The CMS Configuration
    ├── schemas/        # Data Models (member.ts, song.ts)
    ├── sanity.config.ts
    └── sanity.cli.ts
```

---

## 🚀 Getting Started

### 1\. Prerequisites

- Node.js (v18+)
- Git
- Firebase CLI (`npm install -g firebase-tools`)

### 2\. Installation

Clone the repository and install dependencies for **both** workspaces at once:

```bash
git clone [https://github.com/trinity-accidentals/platform.git](https://github.com/trinity-accidentals/platform.git)
cd platform
npm install
```

### 3\. Environment Setup

You need to connect the frontend to the Sanity backend. Create a `.env.local` file inside the `/web` directory:

```bash
# /web/.env.local
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
```

### 4\. Running Locally

You can run the CMS and the Website simultaneously.

**Terminal 1: Start the Website (http://localhost:3000)**

```bash
npm run dev:web
```

**Terminal 2: Start the CMS (http://localhost:3333)**

```bash
npm run dev:studio
```

---

## 📦 Deployment Guide

### Deploying the Website

The website is hosted on Firebase. Deployment builds the static HTML and pushes it to the CDN.

```bash
# From the root directory
npm run deploy:web
```

_Note: This runs `npm run build` inside `/web` and then `firebase deploy`._

### Deploying the Studio (CMS)

If you update the Data Schemas (e.g., adding a new field for "Beatboxer"), you must deploy the Studio so the Business Manager can see it.

```bash
# From the root directory
npm run deploy:studio
```

---

## 🛡️ Maintenance & Handoff (The "SFTB" Protocol)

**To the future Webmaster (Class of '28, '29, and beyond):**

1.  **Don't Break the Bank:** This architecture is designed to cost **$0/month**. Do not switch to a paid hosting provider (like Vercel Pro or Heroku) unless absolutely necessary.
2.  **Video Strategy:** Never upload video files directly to Sanity or the Repository. It will eat our bandwidth limits. Upload to YouTube/Vimeo and use the URL field in the CMS.
3.  **Type Safety:** We use TypeScript. If you change a Schema in the Studio, update the Type definitions in the Web folder.
4.  **Alumni Data:** Never delete a member. Just set their `isActive` toggle to `false` and add their `gradYear`. The goal is to keep the history alive.

**Developed by Sean Balbale '27**
_Maintained by The Trinity College Accidentals_

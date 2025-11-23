# Software Requirements Specification (SRS)

**Project:** Trinity College Accidentals Website  
**Tech Stack:** Next.js (SSG) + Sanity.io (Headless CMS) + Firebase (Hosting)

---

## 1. Technical Architecture

### 1.1 The "Free Tier" Constraint

The architecture is strictly selected to fit within **Free Tier** limits to ensure long-term viability without recurring costs.

| Component    | Technology              | Justification                                                                                           |
| :----------- | :---------------------- | :------------------------------------------------------------------------------------------------------ |
| **Frontend** | **Next.js**             | Static Site Generation (SSG) for pre-rendered HTML. Ensures >90 Lighthouse score and security.          |
| **CMS**      | **Sanity.io**           | Generous free tier based on bandwidth/users, not record counts (unlike Contentful). Fully managed SaaS. |
| **Hosting**  | **Firebase**            | "Spark Plan" offers free global CDN hosting for static assets.                                          |
| **Database** | **Sanity Content Lake** | No SQL maintenance required.                                                                            |

---

## 2. Functional Requirements

### 2.1 Public-Facing Modules

- **FR-WEB-01 Hero Visualization:** Homepage must feature high-fidelity video background/carousel of recent performances (e.g., _The Spiritual_).
- **FR-WEB-02 Member Roster:** "Trading Card" design.
  - _Front:_ High-res action shot.
  - _Hover/Click:_ Flips to reveal stats (Major, Hometown, Solos) and "Dent" nickname.
- **FR-WEB-03 Alumni Database:** Searchable interface filtering by Decade, Voice Part, or Name.
- **FR-WEB-04 Multimedia Player:** Global audio player persisting across page navigation (SPA behavior).

### 2.2 Administration Modules (CMS)

- **FR-CMS-01 Audition Mode Toggle:** Boolean switch in Sanity Studio.
  - _True:_ Homepage Hero CTA becomes "Sign Up for Auditions."
  - _False:_ Homepage Hero CTA defaults to "Hire Us."
- **FR-CMS-02 Structured Repertoire Entry:** Input fields for Songs must include Reference fields for `Soloist` (Member), `Arranger` (Member), and `Beatboxer` (Member).
- **FR-CMS-03 Dynamic Forms:** "Hire Us" form destination email must be editable via CMS without code redeployment.

---

## 3. Non-Functional Requirements

- **NFR-PERF-01:** Lighthouse Performance score >90 via SSG.
- **NFR-COST-01:** Total hosting/storage must remain within Firebase Spark limits (10GB storage, 360MB/day transfer). Video assets to be offloaded to YouTube/Vimeo embeds.
- **NFR-BRAND-01:** Accessibility compliance (WCAG AA). Trinity Gold (#EAAA00) must **not** be used for text on white backgrounds.
- **NFR-LEGAL-01:** Footer must include "Student Organization" disclaimer distinct from College Administration.

---

## 4. Data Schema Definition (Sanity)

### Member Schema (`schema/member.js`)

```javascript
export default {
  name: "member",
  title: "Member",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "gradYear", title: "Class Year", type: "number" },
    {
      name: "voicePart",
      title: "Voice Part",
      type: "string",
      options: {
        list: ["Tenor 1", "Tenor 2", "Baritone", "Bass", "Vocal Percussion"],
      },
    },
    { name: "major", title: "Major", type: "string" },
    { name: "hometown", title: "Hometown", type: "string" },
    { name: "bio", title: "Biography", type: "text" },
    { name: "image", title: "Headshot", type: "image" },
    { name: "isActive", title: "Current Member?", type: "boolean" },
  ],
};
```

### Song Schema (`schema/song.js`)

```javascript
export default {
  name: "song",
  title: "Repertoire",
  type: "document",
  fields: [
    { name: "title", title: "Song Title", type: "string" },
    { name: "originalArtist", title: "Original Artist", type: "string" },
    {
      name: "soloists",
      title: "Soloist(s)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "member" }] }],
    },
    {
      name: "arrangers",
      title: "Arranger(s)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "member" }] }],
    },
    { name: "semesterLearned", title: "Semester Learned", type: "string" },
  ],
};
```

---

## 5\. Implementation Guide

### 5.1 Initialization

1.  **Next.js:** `npx create-next-app@latest trinity-accidentals-site --typescript --tailwind --eslint`
2.  **Sanity:** `npm create sanity@latest` (Project Name: `trinity-accidentals-cms`)
3.  **Firebase:** `firebase init hosting` (Public directory: `out`)

### 5.2 Deployment Pipeline

- **Build Trigger:** Connect GitHub Repository to **Firebase App Hosting**.
- **Content Hook:** Configure Sanity Webhook to trigger a Rebuild on Firebase whenever content is "Published." This ensures the Static Site is always fresh.

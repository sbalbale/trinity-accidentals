# Master Conception Plan (MCP)

**Project:** Trinity College Accidentals Digital Heritage Platform  
**Version:** 1.0  
**Status:** Approved for Development

---

## 1. Executive Summary

The Trinity College Accidentals (est. 1993) require a digital transformation to bridge the gap between their offline prestige (Kennedy Center, Nutmeg Slam victories) and their eroded online presence.

This project is not merely a website redesign; it is the deployment of a **Digital Heritage Platform**. It aims to serve as a dynamic archive, a recruitment engine, and a commercial storefront, strictly adhering to a **"Zero-Cost Maintenance"** philosophy to ensure sustainability for future student administrators.

### Core Strategic Objectives

1.  **Brand Integrity & Disambiguation:** Aggressively distinguish the group from the indie-folk band "The Accidentals" while aligning with official Trinity College brand standards.
2.  **Archival Preservation:** Treat history as structured data. Members, solos, and arrangements are linked entities, preserving the "Dent" lineage.
3.  **Operational Autonomy:** "Headless" architecture to allow non-technical Music Directors to update content without touching code.
4.  **Fiscal Efficiency:** Utilization of Next.js, Firebase, and Sanity.io to achieve enterprise-grade performance at **$0/month**.

---

## 2. User Personas & Journeys

### Primary Persona: "The New Dent" (Recruitment)

- **Who:** Trinity freshman or high school senior. Musical, looking for brotherhood, wary of toxic cultures.
- **Goal:** Determine if the group is talented and socially safe.
- **Key Journey:**
  1.  Scan QR code at Activities Fair.
  2.  Watch "Hero Video" (e.g., _Ghost_) to judge quality.
  3.  Read FAQ regarding reading music requirements.
  4.  **Conversion:** Click "Audition Sign-up."

### Secondary Persona: "The Alumni Donor" (Legacy)

- **Who:** Alumnus (Class of '95, '05, etc.). Nostalgic, wants to verify the group is "still good."
- **Goal:** Reconnect with their specific contribution to the group history.
- **Key Journey:**
  1.  Search for their own name in the "Lineage" database.
  2.  Find their profile linked to specific albums (e.g., _Wild Ass_).
  3.  **Conversion:** Donate or Subscribe to Newsletter.

### Tertiary Persona: "The Event Planner" (Revenue)

- **Who:** Campus administrator or local wedding planner.
- **Goal:** Book entertainment with reliability and professionalism.
- **Key Journey:**
  1.  Review "Repertoire" for genre fit.
  2.  **Conversion:** Submit "Booking Inquiry" form.

---

## 3. Content Strategy: The Entity Model

The site moves away from static pages to a **Relational Entity Model** to support "Pivot Views."

- **Member Entity:** Name, Grad Year, Voice Part, Major, Hometown, Linked Solos, Linked Arrangements.
- **Song Entity:** Title, Original Artist, Linked Arranger, Linked Soloist, Audio/Video Embed.
- **Album Entity:** Title, Year, Cover Art, Tracklist.
- **Event Entity:** Date, Venue, Ticket Link.

_Example Usage:_ A user viewing the song _Ghost_ sees "Arranged by Hank Butler '17." Clicking the name pivots to Hank’s profile, listing all other songs he arranged.

---

## 4. Brand Identity & SEO Strategy

### Visual Identity ("The SFTB Ethos")

- **Structure:** Official Trinity branding (Trinity Blue `PMS 287 C` and Trinity Gold `PMS 124 C`) to establish institutional legitimacy.
- **Personality:** High-energy photography and "Trading Card" style member profiles to convey the "Band of Brothers" culture.
- **Easter Eggs:** Subtle integration of the "SFTB" acronym (e.g., footer watermark, 404 page) to validate internal culture for alumni.

### Disambiguation (SEO)

To combat the SEO dominance of the commercial band "The Accidentals":

- **H1 Strategy:** Use "The Trinity College Accidentals" explicitly.
- **Schema Markup:** Implement `MusicGroup` JSON-LD linked to `CollegeOrUniversity` (Trinity College).
- **Exclusion:** Metadata must explicitly exclude albums _Tangled Red and Blue_ or _Bittersweet_ (belonging to the other band) to prevent algorithmic confusion.

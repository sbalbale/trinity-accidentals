/**
 * Script to populate Sanity CMS with initial placeholder content
 * Run with: node populate-cms.mjs
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read environment variables from .env.local
function loadEnv() {
  try {
    const envPath = join(__dirname, "web", ".env.local");
    const envContent = readFileSync(envPath, "utf-8");
    const env = {};

    envContent.split("\n").forEach((line) => {
      const match = line.match(/^([^=:#]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        env[key] = value;
      }
    });

    return env;
  } catch (error) {
    console.error("Error reading .env.local file:", error.message);
    console.error("Make sure web/.env.local exists with SANITY_API_TOKEN");
    process.exit(1);
  }
}

const env = loadEnv();

if (!env.SANITY_API_TOKEN) {
  console.error("❌ SANITY_API_TOKEN not found in web/.env.local");
  console.error("\nPlease add your Sanity API token to web/.env.local:");
  console.error("SANITY_API_TOKEN=your_token_here");
  console.error("\nTo create a token:");
  console.error("1. Go to https://www.sanity.io/manage");
  console.error("2. Select your project");
  console.error("3. Go to API > Tokens");
  console.error("4. Create a new token with Editor permissions");
  process.exit(1);
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: env.SANITY_API_TOKEN,
  useCdn: false,
});

async function populateCMS() {
  console.log("Starting CMS population...\n");

  try {
    // Create Home Page document
    console.log("Creating Home Page document...");
    const homePage = await client.create({
      _type: "homePage",
      heroTitle: "The Trinity College Accidentals",
      heroSubtitle: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "A brotherhood united by harmony, tradition, and excellence in collegiate a cappella",
            },
          ],
        },
      ],
      featuredTitle: "Experience the Harmony",
      featuredDescription: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "From intimate campus concerts to regional competitions, the Accidentals deliver powerful performances that showcase our tight harmonies, dynamic stage presence, and passion for a cappella music. Every show is a celebration of our brotherhood and musical journey.",
            },
          ],
        },
      ],
    });
    console.log("✓ Home Page created:", homePage._id);

    // Create About Page document
    console.log("\nCreating About Page document...");
    const aboutPage = await client.create({
      _type: "aboutPage",
      title: "Our Legacy",
      description: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Since our founding, the Trinity College Accidentals have been more than just a vocal group—we're a brotherhood bound by our love of music and commitment to excellence. Through generations of performers, we've carried forward a tradition of artistry, camaraderie, and unforgettable performances.",
            },
          ],
        },
      ],
      values: [
        {
          _type: "object",
          title: "Brotherhood",
          description:
            "We're not just singers—we're brothers who support each other on stage and in life.",
          icon: "Users",
        },
        {
          _type: "object",
          title: "Musical Excellence",
          description:
            "Our dedication to perfect harmony and innovative arrangements sets us apart.",
          icon: "Music",
        },
        {
          _type: "object",
          title: "Storied Tradition",
          description:
            "Decades of performances at Trinity and beyond have built our prestigious reputation.",
          icon: "Award",
        },
      ],
    });
    console.log("✓ About Page created:", aboutPage._id);

    // Create Audition Info document
    console.log("\nCreating Audition Info document...");
    const auditionInfo = await client.create({
      _type: "audition",
      title: "Join the Brotherhood",
      description: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Auditions are held at the beginning of every semester. We're looking for talented singers who are passionate about a cappella music.",
            },
          ],
        },
      ],
      faqs: [
        {
          _type: "object",
          question: "Do I need to read music?",
          answer:
            "It helps, but it is not required. We test for ear and pitch.",
        },
        {
          _type: "object",
          question: "What should I prepare?",
          answer: "A verse and a chorus of a song that fits your voice.",
        },
        {
          _type: "object",
          question: "What is the time commitment?",
          answer: "We rehearse 3 times a week.",
        },
      ],
      signupLink: "https://forms.google.com/placeholder",
    });
    console.log("✓ Audition Info created:", auditionInfo._id);

    // Create Footer document
    console.log("\nCreating Footer document...");
    const footer = await client.create({
      _type: "footer",
      copyrightText:
        "© 2025 Trinity College Accidentals. All rights reserved.",
      tagline: "A brotherhood of harmony since 1993",
      socialLinks: [
        {
          _type: "object",
          platform: "instagram",
          url: "https://www.instagram.com/trinityaccidentals",
        },
        {
          _type: "object",
          platform: "facebook",
          url: "https://www.facebook.com/trinityaccidentals",
        },
        {
          _type: "object",
          platform: "youtube",
          url: "https://www.youtube.com/@trinityaccidentals",
        },
      ],
    });
    console.log("✓ Footer created:", footer._id);

    console.log("\n✅ All documents created successfully!");
    console.log(
      "\nYou can now view and edit these documents in Sanity Studio at http://localhost:3333"
    );
  } catch (error) {
    console.error("❌ Error creating documents:", error);
    process.exit(1);
  }
}

populateCMS();

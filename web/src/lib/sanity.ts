import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Initialize the image builder
const builder = imageUrlBuilder(client);

// Helper to build image URLs
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

// Member type definition
export interface Member {
  _id: string;
  name: string;
  voicePart: string;
  major?: string;
  hometown?: string;
  gradYear?: number;
  bio?: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

// Song type definition
export interface Song {
  _id: string;
  title: string;
  originalArtist?: string;
  soloists?: Array<{
    name: string;
  }>;
  arrangers?: Array<{
    name: string;
  }>;
  semesterLearned?: string;
  recordingUrl?: string;
}

// GROQ query to fetch members, sorted by voicePart then name
export async function getMembers(): Promise<Member[]> {
  const query = `*[_type == "member"] | order(voicePart asc, name asc) {
    _id,
    name,
    voicePart,
    major,
    hometown,
    gradYear,
    bio,
    image
  }`;

  return client.fetch(query);
}

// GROQ query to fetch songs with expanded references
export async function getSongs(): Promise<Song[]> {
  const query = `*[_type == "song"] | order(title asc) {
    _id,
    title,
    originalArtist,
    soloists[]->{name},
    arrangers[]->{name},
    semesterLearned,
    recordingUrl
  }`;

  return client.fetch(query);
}

export interface Performance {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: any;
  image: any;
  recordingUrl?: string;
}

export interface Audition {
  _id: string;
  title: string;
  description: any;
  faqs: {
    question: string;
    answer: string;
  }[];
  signupLink: string;
}

export async function getPerformances(): Promise<Performance[]> {
  const query = groq`*[_type == "performance"] | order(date desc) {
    _id,
    title,
    date,
    location,
    description,
    image,
    recordingUrl
  }`;
  return client.fetch(query);
}

export async function getAuditionInfo(): Promise<Audition> {
  const query = groq`*[_type == "audition"][0]`;
  return client.fetch(query);
}

export interface SiteStats {
  membersCount: number;
  performancesCount: number;
  currentMembersCount: number;
}

export async function getSiteStats(): Promise<SiteStats> {
  const query = groq`{
    "membersCount": count(*[_type == "member"]),
    "performancesCount": count(*[_type == "performance"]),
    "currentMembersCount": count(*[_type == "member" && isActive == true])
  }`;
  return client.fetch(query);
}

export interface HomePage {
  heroTitle: string;
  heroSubtitle: any; // block content
  heroImage?: any;
  featuredTitle: string;
  featuredDescription: any; // block content
  featuredImage?: any;
}

export async function getHomePage(): Promise<HomePage | null> {
  const query = groq`*[_type == "homePage"][0]`;
  return client.fetch(query);
}

export interface AboutPage {
  title: string;
  description: any; // block content
  values?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export async function getAboutPage(): Promise<AboutPage | null> {
  const query = groq`*[_type == "aboutPage"][0]`;
  return client.fetch(query);
}

export interface FooterData {
  copyrightText: string;
  tagline: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
}

export async function getFooter(): Promise<FooterData | null> {
  const query = groq`*[_type == "footer"][0]`;
  return client.fetch(query);
}

export interface NavbarData {
  logo?: any;
  groupName?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
}

export async function getNavbar(): Promise<NavbarData | null> {
  const query = groq`*[_type == "navbar"][0]`;
  return client.fetch(query);
}

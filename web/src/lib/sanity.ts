import { createClient } from "next-sanity";
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
    semesterLearned
  }`;
  
  return client.fetch(query);
}

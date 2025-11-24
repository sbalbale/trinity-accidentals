import { getNavbar } from "@/lib/sanity";
import { Navigation } from "./navigation";

export async function NavbarWrapper() {
  const data = await getNavbar();
  return <Navigation data={data} />;
}

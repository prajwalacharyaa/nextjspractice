import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("About Server component");

  return <h1>About{new Date().toLocaleTimeString()}</h1>;
}

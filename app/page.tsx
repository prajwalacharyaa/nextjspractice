import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome!!!. This is the home page</h1>;
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/products">Products</Link>
    </>
  );
}

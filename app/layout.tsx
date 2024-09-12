import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next Js",
    template: "%s | node js",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50`}
      >
        <header className="bg-blue-500 text-white shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">My App</div>
            <ul className="flex space-x-6">
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/dashboards" className="hover:underline">
                  Dashboards
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/order-product" className="hover:underline">
                  Order Product
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow container m-0 p-0 bg-gray-500 w-full">
          {children}
        </main>

        <footer className="bg-gray-100 text-gray-600 py-4 text-center shadow-inner">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

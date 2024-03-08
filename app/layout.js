import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Forms",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex justify-between px-3 mx-2">
      <Link className="m-2" href="/">Home</Link>
      <u><Link className="m-2" href="/view">View inserted docs</Link></u>
      </div>
      {children}
      </body>
    </html>
  );
}

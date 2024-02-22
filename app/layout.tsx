import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./components/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Tech Resume",
  description: "Boost your job search with AI: Create resumes, prep for interviews, and land tech jobs fast.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Topbar />
        {children}
        {/* TODO: BottomBar */}
      </body>
    </html>
  );
}

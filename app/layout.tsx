import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mazaady Task",
  description: "Mazaady Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

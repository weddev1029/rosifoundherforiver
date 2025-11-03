import type { Metadata } from "next";
import { Great_Vibes, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JaneAndDoe Wedding",
  description: "Jane and John are getting married!",
  applicationName: "The WedDev Team",
  authors: [{ name: "The WedDev Team", url: "https://mrklwnc.vercel.app" }],
  generator: "Next.js",
  keywords: [
    "Wedding",
    "Invitation",
    "Wedding Invitation",
    "Celebrate",
    "Love",
    "Marriage",
    "Bride and Groom",
    "Save the Date",
    "Wedding Ceremony",
    "Reception",
    "Happily Ever After",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${greatVibes.variable} ${inter.variable} antialiased text-white`}
      >
        {children}
      </body>
    </html>
  );
}

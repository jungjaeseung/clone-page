import "./globals.css"; 
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import ContactButton from "./_components/ContactButton";
import PageTransition from "./_components/PageTransition";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Attention",
  description: "I design attention-grabbing designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} font-sans min-h-screen bg-white`}>
        <PageTransition>
          {children}
        </PageTransition>
        <ContactButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alé Pouroullis - Software Engineer",
  description:
    "Software engineer specializing in full-stack development and cloud-native solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
              <div className="container flex h-14 items-center justify-end">
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1 container py-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

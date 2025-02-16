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
  title: {
    default: "Alé Pouroullis | Software Engineer",
    template: "%s | Alé Pouroullis",
  },
  description:
    "Software engineer specializing in systems programming and full-stack development. Building sophisticated systems with technical precision and creative innovation.",
  openGraph: {
    title: "Alé Pouroullis | Software Engineer",
    description:
      "Software engineer specializing in systems programming and full-stack development.",
    url: "https://alepouroullis.com",
    siteName: "Alé Pouroullis",
    locale: "en_UK",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
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

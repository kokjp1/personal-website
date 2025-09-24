import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const inter = Inter({
  subsets: ["latin"], // you can add "latin-ext" etc.
  variable: "--font-inter", // sets a CSS variable
  display: "swap", // ensures fast rendering
});

export const metadata: Metadata = {
  title: "James Kok – Portfolio",
  description: "Personal portfolio website of James Kok",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="min-h-dvh flex flex-col">
            <div className="container mx-auto px-4 max-w-3xl">
              <Header />
            </div>
            <main className="container mx-auto px-4 max-w-3xl flex-1 py-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/app/components/theme-provider';
import { Inter } from 'next/font/google';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { InteractiveGridPattern } from '@/components/ui/shadcn-io/interactive-grid-pattern';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'James Kok – Portfolio',
  description: 'Personal portfolio website of James Kok',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    other: [{ rel: 'icon', url: '/favicon-32.png', sizes: '32x32' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-background text-foreground min-h-dvh antialiased">
        <ThemeProvider>
          <div className="flex min-h-dvh flex-col">
            <div className="container mx-auto max-w-3xl px-4">
              <div className="flex items-center justify-between gap-4">
                <Header />
                {/* Place the button (CommandPalette) in header if desired */}
              </div>
              <InteractiveGridPattern
                squares={[25, 25]}
                className="mt-[-400] h-2/3 skew-y-12 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              />
            </div>
            <main className="container mx-auto max-w-3xl flex-1 px-4 py-10">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}

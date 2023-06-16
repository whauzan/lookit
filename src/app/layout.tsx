import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/Toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lookit',
  description: 'A Reddit clone built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'light bg-white text-slate-900 antialiased',
        inter.className
      )}
    >
      <body
        className="min-h-screen bg-slate-50 pt-12 antialiased"
        suppressHydrationWarning={true}
      >
        <Navbar />
        {authModal}
        <div className="container mx-auto h-full max-w-7xl pt-12">
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';
import AuthGuard from '@/components/AuthGuard';

export const metadata: Metadata = {
  title: 'Credit Cards, Bank, and Loans - Personal and Business',
  description: 'Credit Cards, Bank, and Loans - Personal and Business'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AuthGuard>{children}</AuthGuard>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

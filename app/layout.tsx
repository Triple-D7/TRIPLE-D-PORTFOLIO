import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TRIPLE D',
  description: 'Premium creative technology portfolio for TRIPLE D.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

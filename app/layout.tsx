import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TRIPLE D',
  description: 'Premium creative technology portfolio for TRIPLE D.',
  icons: {
    icon: '/assets/triple_d_logo_transparent.png',
    shortcut: '/assets/triple_d_logo_transparent.png',
    apple: '/assets/triple_d_logo_transparent.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

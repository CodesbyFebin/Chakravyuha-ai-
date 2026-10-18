import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chakravyuha AI Command Center',
  description: 'A 37-widget AI agent harness and mission control HUD.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

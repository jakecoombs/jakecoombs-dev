import "../styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jake Coombs",
  description: "Welcome to Jake Coombs's personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

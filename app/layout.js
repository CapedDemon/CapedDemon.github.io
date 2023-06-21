"use client";

import "./globals.css";

export const metadata = {
  title: "Shreejan Dolai",
  description: "Welcome to my world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

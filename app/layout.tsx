import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Vraj Shah || Personal Portfolio",
  description: "Vraj Shah || Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

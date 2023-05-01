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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logos/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logos/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logos/favicon-16x16.png"
        />
        <link rel="manifest" href="/logos/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/logos/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

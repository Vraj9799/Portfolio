import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Vraj Shah || Personal Portfolio",
  description:
    "Full-stack developer with experience in building robust web applications using modern technologies. Skilled in frontend and backend development, and passionate about creating efficient and scalable solutions.",
  referrer: "no-referrer",
  creator: "Vraj Shah",
  authors: {
    name: "Vraj Shah",
  },
  keywords:
    "HTML, CSS, Javascript, Typescript, ReactJs, Next.Js, Java, Spring Boot, C#, ASP.NET CORE, SQL, Microservices",
  robots: "index, follow",
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
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/logos/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

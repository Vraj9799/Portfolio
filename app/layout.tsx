import "./globals.css";

export const metadata = {
  title: "Vraj Portfolio",
  description: "Vraj Portfolio",
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

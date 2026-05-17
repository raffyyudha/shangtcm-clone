import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shang TCM Clinic | Transforming Health, One Person at a Time",
  description: "Discover Shang TCM, a leading provider of traditional Chinese medicine and tcm treatments in Singapore. Our experienced practitioners offer holistic treatments tailored to your unique needs, promoting overall well-being and balance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

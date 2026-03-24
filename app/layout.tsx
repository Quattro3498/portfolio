import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: "Simone Quattromini | Full-Stack Developer",
  description: "Portfolio of Simone Quattromini, a full-stack developer specializing in React, Node.js, and scalable architectures. Check out my projects and code.",
  openGraph: {
    title: "Simone Quattromini - Portfolio",
    description: "Explore Simone Quattromini's GitHub projects and repositories.",
    url: "https://simonequattromini.dreamdev.store",
    siteName: "Simone Quattromini Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Simone Quattromini",
    jobTitle: "Full-Stack Developer",
    url: "https://simonequattromini.dreamdev.store",
    sameAs: [
      "https://github.com/Quattro3498",
      "https://www.linkedin.com/in/simone-quattromini/"
    ]
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

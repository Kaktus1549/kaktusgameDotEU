import React from 'react';

const pageUrl = process.env.URL as string;
const pageTitle = 'KaktusGame';
const pageDescription = "Hey, I'm Kaktus and I created this website. I don't know if you'll like it, but I'd be glad for any feedback!";
const pageImage = '/images/whoIam.png';
export const metadata = {
  title: pageTitle,
  description: pageDescription,
  metadataBase: new URL(pageUrl),

  openGraph: {
    images: [pageImage],
  },
  twitter: {
    images: pageImage,
  },
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

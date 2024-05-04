import React from 'react';

export const metadata = {
  defaultTitle: 'KaktusGame.eu',
  description: 'KaktusGame.eu - My personal website',
};

export default function RootLayout({
  children,
  titleOverride,
  metadataOverride,
}: {
  children: React.ReactNode;
  titleOverride?: string;
  metadataOverride?: any; // Adjust the type of metadataOverride as per your needs
}) {
  const title = titleOverride || metadata.defaultTitle;
  const mergedMetadata = { ...metadata, ...metadataOverride };

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* Primary Meta Tags */}
        <meta name="title" content={mergedMetadata.title} />
        <meta name="description" content={mergedMetadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={mergedMetadata.url} />
        <meta property="og:title" content={mergedMetadata.title} />
        <meta property="og:description" content={mergedMetadata.description} />
        <meta property="og:image" content={mergedMetadata.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={mergedMetadata.url} />
        <meta property="twitter:title" content={mergedMetadata.title} />
        <meta property="twitter:description" content={mergedMetadata.description} />
        <meta property="twitter:image" content={mergedMetadata.image} />
        
      </head>
      <body>{children}</body>
    </html>
  );
}

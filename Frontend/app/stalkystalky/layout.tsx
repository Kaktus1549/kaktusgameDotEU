
const pageUrl = process.env.URL as string;
const pageImage = '/images/tux.png';
export const metadata = {
    title: 'd0_u_f3el_s4fe?',
    description: "Do you feel safe on the internet? I don't think so. I'm going to show you how easy it is to get information about you.",
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

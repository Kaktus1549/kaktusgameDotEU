export const metadata = {
  title: 'KaktusGame.eu',
  description: 'KaktusGame.eu - My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

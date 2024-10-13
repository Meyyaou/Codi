export const metadata = {
  title: 'Codi',
  description: 'Premier dico inversé',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

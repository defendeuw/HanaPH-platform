import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HanaPH - Business Directory Demo',
  description: 'AI-Powered Business Directory & Mini-Website Platform for Philippine Cities',
  keywords: 'business directory, restaurants, Philippines, Iloilo',
  openGraph: {
    title: 'HanaPH - Business Directory Demo',
    description: 'AI-Powered Business Directory & Mini-Website Platform for Philippine Cities',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

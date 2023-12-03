import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'fandom',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="hR4AqXBgSPLZPrEaweMphwTCyFFmUF7REfYj3dqi9b8" />
       <UserProvider>
      <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  )
}

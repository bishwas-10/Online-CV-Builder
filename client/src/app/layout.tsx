import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import ReduxProvider from './components/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online-CV Builder',
  description: 'Buil your CV online for free and get hired',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
     <ReduxProvider>
     <Navbar/>
        {children}
     </ReduxProvider>
        
        </body>
    </html>
  )
}

import type { Metadata } from 'next'

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
   
      <div className="h-max px-10">
      
        {children}
        </div>
      
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online-CV Builder',
  description: 'Build your CV online for free and get hired',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <div className="h-max">
      
        {children}
        </div>
      
  )
}

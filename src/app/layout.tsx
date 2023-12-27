import { Inter } from 'next/font/google'
import './globals.css'
import { UserContextProvider } from '@/contexts/UserContext'
import { ChatProvider } from '@/contexts/ChatContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <ChatProvider>
            {children}
          </ChatProvider>
        </UserContextProvider>
      </body>
    </html>
  )
}

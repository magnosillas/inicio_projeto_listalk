"use client"
import ProviderQuery from '@/components/ProviderQuery'
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        <ProviderQuery>
          {children}

        </ProviderQuery>
        </body>
    </html>
  )
}

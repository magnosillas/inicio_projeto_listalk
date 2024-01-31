"use client"
import ProviderQuery from '@/components/ProviderQuery'
import './globals.css'
import Header from '@/components/Header';


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

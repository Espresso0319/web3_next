// app/layout.tsx
import React from 'react'
import { WagmiProviderWrapper } from './providers/WagmiProvider'
import "./globals.css";

export const metadata = {
  title: 'Wagmi & Next.js App Router Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProviderWrapper>
          {children}
        </WagmiProviderWrapper>
      </body>
    </html>
  )
}

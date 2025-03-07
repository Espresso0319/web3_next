// app/layout.tsx
import React from 'react'
import { WagmiWrapper } from './WagmiWrapper'
import { WagmiProviderWrapper } from './providers/WagmiProvider'

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
        {/* 因为 WagmiWrapper 是一个 Client Component，
            这里是一个 Server Component，把它直接用在 JSX 中即可。 */}
        <WagmiProviderWrapper>
          <WagmiWrapper>
            {children}
          </WagmiWrapper>
        </WagmiProviderWrapper>
      </body>
    </html>
  )
}

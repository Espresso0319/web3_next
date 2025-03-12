'use client'

import { WagmiProvider } from 'wagmi'
import { config } from '../lib/wagmiConfig'
import { ReactNode } from 'react'
import { QueryProvider } from './QueryProvider'

export function WagmiProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryProvider>
        {children}
      </QueryProvider>
    </WagmiProvider>
  )
} 
'use client'  // 关键：明确指定这是客户端组件

import React from 'react'
import { WagmiProvider } from 'wagmi'
import { config } from '../config'

interface WagmiWrapperProps {
  children: React.ReactNode
}

export function WagmiWrapper({ children }: WagmiWrapperProps) {
  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  )
}

'use client'

import { useConnect, useAccount, useDisconnect } from 'wagmi'
import { useState } from 'react'

export default function ConnectWallet() {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const [isOpen, setIsOpen] = useState(false)

  if (isConnected) {
    return (
      <div className="flex flex-col items-center">
        <div className="mb-2">已连接: {address?.substring(0, 6)}...{address?.substring(address.length - 4)}</div>
        <button 
          onClick={() => disconnect()} 
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          断开连接
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        连接钱包
      </button>
      
      {isOpen && (
        <div className="mt-4 p-4 border rounded-md shadow-md">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                connect({ connector })
                setIsOpen(false)
              }}
              disabled={!connector.ready || isLoading && pendingConnector?.uid === connector.uid}
              className="block w-full px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              {connector.name}
              {isLoading && pendingConnector?.uid === connector.uid && ' (连接中...)'}
            </button>
          ))}
          {error && <div className="text-red-500 mt-2">{error.message}</div>}
        </div>
      )}
    </div>
  )
} 
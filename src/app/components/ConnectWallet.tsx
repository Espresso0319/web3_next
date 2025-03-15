"use client";

import { useConnect, useAccount, useDisconnect } from "wagmi";
import { useState } from "react";

export default function ConnectWallet() {
  const { connect, connectors, error } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isOpen, setIsOpen] = useState(false);

  if (isConnected) {
    return (
      <div className="flex flex-col items-center">
        <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center w-full">
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            <span className="font-medium text-sm sm:text-base">已连接钱包</span>
          </div>
          <div className="font-mono text-xs sm:text-sm">
            {address?.substring(0, 6)}...
            {address?.substring(address.length - 4)}
          </div>
        </div>
        <button
          onClick={() => disconnect()}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-5-5H3zm7 5a1 1 0 10-2 0v4a1 1 0 102 0V8zm-1 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          断开连接
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-1 sm:gap-2 shadow-md hover:shadow-lg text-sm sm:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
            clipRule="evenodd"
          />
        </svg>
        连接钱包
      </button>

      {isOpen && (
        <div className="mt-3 sm:mt-4 p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full">
          <h3 className="text-center font-medium mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            选择连接方式
          </h3>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                connect({ connector });
                setIsOpen(false);
              }}
              className="block w-full px-3 sm:px-4 py-2 sm:py-3 mb-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors text-left flex items-center text-sm sm:text-base"
            >
              {connector.name === "MetaMask" && (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.9582 1L19.8241 10.7183L22.2665 5.09082L32.9582 1Z"
                    fill="#E17726"
                    stroke="#E17726"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.04858 1L15.0707 10.809L12.7423 5.09082L2.04858 1Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.2295 23.5334L24.7348 28.8961L32.2695 30.9312L34.3982 23.6501L28.2295 23.5334Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.617676 23.6501L2.73438 30.9312L10.2571 28.8961L6.77443 23.5334L0.617676 23.6501Z"
                    fill="#E27625"
                    stroke="#E27625"
                    strokeWidth="0.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span>{connector.name}</span>
            </button>
          ))}
          {error && (
            <div className="text-red-500 mt-2 text-xs sm:text-sm">
              {error.message}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

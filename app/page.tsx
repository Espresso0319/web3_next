import ConnectWallet from './components/ConnectWallet'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm sm:max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 sm:p-6 md:p-8 transition-all hover:shadow-xl">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">Web3 钱包连接</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">连接您的MetaMask钱包，开始您的Web3之旅</p>
        </div>
        
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center border border-gray-200 dark:border-gray-600 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 dark:text-gray-300">
              <path fill="currentColor" d="M378.7 32H133.3C82.4 32 41 73.4 41 124.3V387.7C41 438.6 82.4 480 133.3 480H378.7C429.6 480 471 438.6 471 387.7V124.3C471 73.4 429.6 32 378.7 32zM176 128c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64zm208 224H128c-8.8 0-16-7.2-16-16v-16c0-44.2 35.8-80 80-80h48c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16z"/>
            </svg>
          </div>
        </div>
        
        <ConnectWallet />
        
        <div className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <p>安全连接 · 数据加密 · 完全控制您的资产</p>
        </div>
      </div>
      
      <footer className="mt-4 sm:mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Web3钱包演示 | 基于Wagmi和Next.js构建</p>
      </footer>
    </div>
  );
}

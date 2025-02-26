// src/pages/api/balance.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Network, Alchemy, AlchemySubscription } from "alchemy-sdk";

// 配置 Alchemy 设置
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY || "", // 如果找不到，则为空字符串
  network: Network.ETH_MAINNET,
};

// 初始化 Alchemy 实例
const alchemy = new Alchemy(settings);

// 获取 ETH 余额的方法
async function getETHBalance(address: string): Promise<string> {
  try {
    // 获取指定地址的 ETH 余额（以 Wei 为单位）
    const balanceInWei = await alchemy.core.getBalance(address);
    // 将 Wei 转换为 Ether
    const balanceInEther = parseInt(balanceInWei, 16) / 1e18;
    return balanceInEther.toString();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching balance:", error.message);
    } else {
      console.error("Unknown error occurred:", error);
    }
    throw new Error("Failed to fetch balance");
  }
}

// 监听待处理的交易
/* alchemy.ws.on(
  {
    method: AlchemySubscription.PENDING_TRANSACTIONS,
    toAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // 示例地址
  },
  (tx) => console.log(tx)
); */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { address } = req.query;

    if (!address || typeof address !== "string") {
      return res
        .status(400)
        .json({ error: "Address is required and must be a valid string" });
    }

    try {
      // 调用 getETHBalance 获取余额
      const balance = await getETHBalance(address);
      return res.status(200).json({ address, balance });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}

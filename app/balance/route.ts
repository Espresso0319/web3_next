// app/balance/route.ts
//  http://localhost:3000/balance?address=0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045

import { NextResponse } from "next/server";
import { Network, Alchemy } from "alchemy-sdk";

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
    //Call the method to return the token balances for this address
    /*     const response = await alchemy.core.getTokenBalances(address, [
      usdcContract,
    ]); */
    // 将 Wei 转换为 Ether
    /* const balanceInEther = parseInt(response, 16) / 1e18; */
    return "1000";
  } catch (error) {
    console.error(
      "Error fetching balance:",
      error instanceof Error ? error.message : error
    );
    throw new Error("Failed to fetch balance");
  }
}

// API 路由处理 - 处理 GET 请求
export async function GET(req: Request) {
  const url = new URL(req.url);
  const address = url.searchParams.get("address");

  if (!address || typeof address !== "string") {
    return NextResponse.json(
      { error: "Address is required and must be a valid string" },
      { status: 400 }
    );
  }

  try {
    // 调用 getETHBalance 获取余额
    const balance = await getETHBalance(address);
    return NextResponse.json({ address, balance });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

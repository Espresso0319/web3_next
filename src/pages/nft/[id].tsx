// pages/nft/[id].tsx
import { GetServerSideProps } from "next";
import React from "react";

type NFT = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type NFTPageProps = {
  nft: NFT | null;
};

const NFTPage = ({ nft }: NFTPageProps) => {
  if (!nft) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{nft.name}</h1>
      <img src={nft.image} alt={nft.name} />
      <p>{nft.description}</p>
    </div>
  );
};

// 获取 NFT 数据，通常会从一个 API 获取
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  // 假设通过 `id` 获取 NFT 数据（可以从数据库或API获取）
  const nft = await fetchNFTData(id);

  return {
    props: {
      nft,
    },
  };
};

// 模拟 API 请求：获取 NFT 数据
const fetchNFTData = async (id: string): Promise<NFT | null> => {
  // 这里你可以调用实际的 API 或数据库查询
  /*   const response = await fetch(`https://api.example.com/nft/${id}`);
  if (response.ok) {
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      image: data.image,
    };
  } */
  return {
    id: "id_xxx",
    name: "nae_xxx",
    description: "description_xxx",
    image: "image_xxx",
  };
};

export default NFTPage;

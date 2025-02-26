// app/[id]/page.tsx
import React from "react";

type Props = {
  params: { id: string }; // params comes from the dynamic route
};

const NFTPage = async ({ params }: Props) => {
  const { id } = await params;
  const nftData = await fetchNFTData(id); // Fetch NFT data based on the `id`

  return (
    <div>
      <h1>NFT Details for {nftData.name}</h1>
      <p>{nftData.description}</p>
      {/* Render NFT data here */}
    </div>
  );
};

// 获取 NFT 数据，通常会从一个 API 获取
async function fetchNFTData(id: string) {
  console.log("id:", id);

  /* const response = await fetch(`https://api.example.com/nft/${id}`);
  const data = await response.json(); */
  // 假设通过 `id` 获取 NFT 数据（可以从数据库或API获取）
  const nft = {
    id: "id_xxx",
    name: "nae_xxx",
    description: "description_xxx",
    image: "image_xxx",
  };
  return nft;
}

export default NFTPage;

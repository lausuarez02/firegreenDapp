"use client";

// Component to display available nodes (collections)
import { NFTs } from "./_components/NFTs";
import { Nodes } from "./_components/Nodes";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

// Component to display available NFTs within a node

// export const metadata = getMetadata({
//   title: "Markteplace",
//   description: "Marletplace for nfts",
// });

const MarketPlace: NextPage = () => {
  return (
    <div className="min-h-screen p-6">
      <header className="text-left mb-4">
        <h1 className="text-3xl font-bold text-primary">Marketplace</h1>
      </header>
      <section className="flex flex-col">
        <Nodes /> {/* Nodes displayed first, NFTs appear below after selecting a node */}
      </section>
    </div>
  );
};

export default MarketPlace;

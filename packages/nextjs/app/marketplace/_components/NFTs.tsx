"use client";

export const NFTs = () => {
  // Sample data for NFTs
  const nfts = [
    { id: 1, name: "NFT 1", price: "0.1 ETH" },
    { id: 2, name: "NFT 2", price: "0.2 ETH" },
    { id: 3, name: "NFT 3", price: "0.3 ETH" },
  ];

  return (
    <div className="w-full lg:w-3/4 bg-base-200 p-4 rounded-lg shadow-md ml-0 lg:ml-4">
      <h2 className="text-2xl font-semibold text-accent mb-4">Available NFTs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map(nft => (
          <div key={nft.id} className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-lg font-bold">{nft.name}</h3>
              <p className="text-neutral">{nft.price}</p>
              <button className="btn btn-primary btn-sm mt-4">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

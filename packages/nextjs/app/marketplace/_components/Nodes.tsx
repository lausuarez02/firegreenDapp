"use client";

import { useState } from "react";
import { NFTs } from "./NFTs"; // Import the NFTs component to display NFTs for the selected node

export const Nodes = () => {
  // Sample data for nodes (collections)
  const nodes = [
    { id: 1, name: "Node 1", description: "Description of Node 1" },
    { id: 2, name: "Node 2", description: "Description of Node 2" },
    { id: 3, name: "Node 3", description: "Description of Node 3" },
  ];

  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Display Nodes (Collections) */}
      <h2 className="text-2xl font-semibold text-accent mb-4">Available Nodes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nodes.map(node => (
          <div
            key={node.id}
            className="card bg-base-200 shadow-lg cursor-pointer"
            onClick={() => setSelectedNode(node.id)}
          >
            <div className="card-body">
              <h3 className="card-title text-lg font-bold">{node.name}</h3>
              <p className="text-neutral">{node.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Display NFTs for the Selected Node */}
      {selectedNode && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-accent mb-4">NFTs in {nodes.find(node => node.id === selectedNode)?.name}</h2>
          {/* <NFTs nodeId={selectedNode} /> */}
        </div>
      )}
    </div>
  );
};

"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-full md:w-3/4 lg:w-2/3">
        <h1 className="text-center mb-8">
          <span className="block text-4xl font-bold text-green-600">EcoAssets</span>
          <span className="block text-2xl text-green-500 mt-2">Empowering Environmental Change through RWA</span>
        </h1>
        
        <div className="bg-gradient-to-b from-green-100 to-green-200 rounded-lg p-8 shadow-lg">
          <p className="text-xl text-green-800 mb-6">
            Welcome to EcoAssets, where we transform environmental initiatives into tangible digital assets. Our platform bridges the gap between real-world ecological projects and blockchain technology.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              {/* <TreeIcon className="h-16 w-16 text-green-600 mx-auto" /> */}
              <p className="mt-2 text-green-700">Preserve Forests</p>
            </div>
            <div className="text-center">
              {/* <LeafIcon className="h-16 w-16 text-green-600 mx-auto" /> */}
              <p className="mt-2 text-green-700">Clean Energy</p>
            </div>
            <div className="text-center">
              {/* <RecycleIcon className="h-16 w-16 text-green-600 mx-auto" /> */}
              <p className="mt-2 text-green-700">Reduce Waste</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Link href="/explore" passHref>
              <button className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Explore Projects
              </button>
            </Link>
            <Link href="/invest" passHref>
              <button className="btn btn-secondary bg-green-100 hover:bg-green-200 text-green-700 font-bold py-2 px-4 rounded border border-green-500">
                Start Investing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
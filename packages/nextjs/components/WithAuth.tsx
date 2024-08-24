import { useAccount } from 'wagmi';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';


export const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const { address, isConnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
      if (!isConnected) {
        router.push('/'); // Redirect to login page if not connected
      }
    }, [isConnected, router]);

    // If connected, render the component
    return isConnected ? <Component {...props} /> : null;
  };
};

withAuth.displayName = 'MyComponent';

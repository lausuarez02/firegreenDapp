import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

const withAuth = (Component: React.FC) => {
  return (props: any) => {
    const { address, isConnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
      if (!isConnected) {
        router.push("/"); // Redirect to login page if not connected
      }
    }, [isConnected, router]);

    // If connected, render the component
    return isConnected ? <Component {...props} /> : null;
  };
};
withAuth.displayName = "withAuth";
export default withAuth

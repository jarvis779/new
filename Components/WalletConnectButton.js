"use client"; // Required for client-side rendering
import { useState } from "react";

export default function WalletConnectButton() {
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        setIsConnecting(true); // Indicate connection in progress

        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
          setAccount(accounts[0]); // Save the connected account
          console.log("Connected Account:", accounts[0]);
        }
      } catch (error) {
        if (error.code === 4001) {
          // User rejected the request
          console.warn("User rejected connection:", error);
          alert("You closed MetaMask. Please try connecting again.");
        } else {
          // Handle other errors
          console.error("Error connecting to wallet:", error);
          alert("An error occurred while connecting. Please try again.");
        }
      } finally {
        setIsConnecting(false); // Reset "Connecting" state
      }
    } else {
      // MetaMask is not installed
      alert("MetaMask is not installed. Please install it to connect your wallet.");
    }
  };

  const disconnectWallet = () => {
    setAccount(null); // Clear the account state
    console.log("Wallet disconnected");
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!account ? (
        <button
          onClick={connectWallet}
          disabled={isConnecting} // Disable button while connecting
          className={`btn btn-primary ${
            isConnecting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          } text-white py-2 px-4 rounded-lg transition duration-300`}
        >
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>
      ) : (
        <>
          <button
            onClick={disconnectWallet}
            className="btn btn-secondary bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Disconnect Wallet
          </button>
          <div className="mt-2 text-white font-mono text-sm">
            <p>Connected Account:</p>
            <p className="text-blue-400">{account}</p>
          </div>
        </>
      )}
    </div>
  );
}

import { ReactNode, useMemo } from "react";

//  to support next
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
//  to import module
import { SnackbarProvider } from "notistack";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
//  to import style
import "../styles/globals.css";
//  to import context

const ClientWalletProvider = dynamic<{ children: ReactNode }>(
  () =>
    import("context/ClientWalletProvider").then(
      ({ ClientWalletProvider }) => ClientWalletProvider
    ),
  {
    ssr: false,
  }
);

const network =
  process.env.NEXT_PUBLIC_NETWORK === "mainnet-beta"
    ? WalletAdapterNetwork.Mainnet
    : WalletAdapterNetwork.Devnet;

function MyApp({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  return (
    <SnackbarProvider>
      <ConnectionProvider endpoint={endpoint}>
        <ClientWalletProvider>
          <Component {...pageProps} />
        </ClientWalletProvider>
      </ConnectionProvider>
    </SnackbarProvider>
  );
}

export default MyApp;

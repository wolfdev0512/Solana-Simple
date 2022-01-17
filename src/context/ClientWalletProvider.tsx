import { useMemo } from "react";
// wallet provider network
import {
  WalletProvider,
  WalletProviderProps,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// wallet type
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getTorusWallet,
  getLedgerWallet,
  getMathWallet,
  getSolletWallet,
  getSolletExtensionWallet,
  getSafePalWallet,
  getSolongWallet,
  getBloctoWallet,
  getBitKeepWallet,
  getBitpieWallet,
  getCoin98Wallet,
} from "@solana/wallet-adapter-wallets";
// style
import("@solana/wallet-adapter-react-ui/styles.css" as any);

export function ClientWalletProvider(
  props: Omit<WalletProviderProps, "wallets">
): JSX.Element {
  const network =
    process.env.NEXT_PUBLIC_NETWORK === "mainnet-beta"
      ? WalletAdapterNetwork.Mainnet
      : WalletAdapterNetwork.Devnet;

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: {
          // TODO: Get your own tor.us wallet client Id
          clientId:
            "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
        },
      }),
      getLedgerWallet(),
      getMathWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
      getSafePalWallet(),
      getSolongWallet(),
      getBloctoWallet(),
      getBitKeepWallet(),
      getBitpieWallet(),
      getCoin98Wallet(),
    ],
    [network]
  );

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider {...props} />
    </WalletProvider>
  );
}

export default ClientWalletProvider;

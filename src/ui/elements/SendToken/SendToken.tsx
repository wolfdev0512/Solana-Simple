import React, { useState, useEffect } from "react";

import {
  Layout,
  WalletConnectButtonContainer,
  SendButtonContainer,
  SendAddressInput,
  SendButton,
} from "./SendToken.styled";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletConnectButton: React.FC = () => {
  return (
    <Layout>
      <WalletConnectButtonContainer>
        <WalletMultiButton />
      </WalletConnectButtonContainer>
      <SendButtonContainer>
        <SendAddressInput />
        <SendButton>SendToken</SendButton>
      </SendButtonContainer>
    </Layout>
  );
};
export default WalletConnectButton;

// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const WalletConnectButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SendButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SendAddressInput = styled.input`
  font-size: 16px;
  line-height: 24px;
`;
export const SendButton = styled.button`
  height: 30px;
`;

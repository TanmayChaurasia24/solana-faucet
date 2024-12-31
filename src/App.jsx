import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

import { SignMessage } from './SignMessage';
import {RequestAirdrop} from "./RequestAirdrop"
import {ShowSolBalance} from "./ShowSolBalance"
import { SendTokens } from './SendTokens';

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/1csuj0ZBr-zeJ4SW9j3zQ5eLuSwixhUn"}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                </div>
                <RequestAirdrop />
                 <ShowSolBalance /> 
                <SignMessage />
                <SendTokens />
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { useEffect, useState } from "react";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "VZEAqnQiMQ-VHR56HbSJgGeMQl9fXle5",
    walletConnectProjectId: "cb6a278fab33b4eeca1a3e0ed9d647c2",

    // Required
    appName: "AlamoSwap",

    // Optional
    appDescription: "A Next.js demo app for 0x Swap API and ConnectKit",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <ConnectKitButton />
          {mounted && <Component {...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}

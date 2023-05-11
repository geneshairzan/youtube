import UI from "@component/gip-ui";

import { Web3Auth } from "@web3auth/modal";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
//Initialize within your constructor

export default function App(params) {
  const web3auth = new Web3Auth({
    // clientId: "BEhh4k02_C5E2Yn3mNMMyHoLPtVB1iCyxdg0f5XZR83ZJeYg4Ske2t8lwejzlU3lyKkaljyb3uRBQ2ImY-9AXE8", // Torus
    clientId: "BGInf2m4l-XSaa5buNG81YY1J4Hg9CSMrIevrhQ09rnxnTpV7luu8FAL28D6REqliWQ5xNAqP5toU93gB27qdGQ", // Plug And Play
    web3AuthNetwork: "cyan",
    chainConfig: {
      // ========================================================= sample ETH
      // chainNamespace: "eip155",
      // chainId: "0x5", // Please use 0x5 for Goerli Testnet
      // ========================================================= sample SOLANA
      // chainNamespace: "solana",
      // chainId: "0x2", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
      // rpcTarget: "https://rpc.ankr.com/solana",
      // displayName: "Solana Mainnet",
      // blockExplorer: "https://explorer.solana.com",
      // ticker: "SOL",
      // tickerName: "Solana Token",
      // ========================================================= sample MOONBEAM
      chainNamespace: "eip155",
      chainId: "0x504", // hex of 1284, moonbeam mainnet
      rpcTarget: "https://rpc.ankr.com/moonbeam",
      // // Avoid using public rpcTarget in production.
      // // Use services like Infura, Quicknode etc
      displayName: "Moonbeam Mainnet",
      blockExplorer: "https://moonbeam.moonscan.io",
      ticker: "GLMR",
      tickerName: "GLMR",
    },
  });

  async function handleLogout() {
    await web3auth.logout();
  }

  async function handleGetInfo() {
    const user = await web3auth.getUserInfo();
    console.log(user);
  }

  async function handleLogin() {
    // console.log("hlogin");
    await web3auth.initModal();
    const web3authProvider = web3auth.connect();
    // const solanaWallet = new SolanaWallet(web3authProvider); // web3auth.provider
  }
  return (
    <UI.Stack spacing={2}>
      {console.log(web3auth)}
      <UI.Button onClick={handleLogin}>login</UI.Button>
      <UI.Button onClick={handleLogout}>logout</UI.Button>
      <UI.Button onClick={handleGetInfo}>info</UI.Button>
    </UI.Stack>
  );
}

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contract from "./utils/contract.json";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Carrousel from "./components/Carrousel";
import ConfigNft from "./components/ConfigNft";
import Exclusives from "./components/Exclisives";
import Museum from "./components/Museum";
import Accordion from "./components/Accordion";
import Footer from './components/Footer.js'


function App() {
  const [wallet, setWallet] = useState(null);
  const [chain, setChain] = useState("");

  const [isPending, setIspending] = useState(false);
  const [minted, setMinted] = useState(false);
  const [minting, setIsMinting] = useState(false);
  const [txn, setTxn] = useState(null);
  const [currentSupply, setCurrentSupply] = useState(0);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0xDae6eDFF6e3BA70aC797B8ba46b4E3A1FbcD7e9b",
    SCAN_LINK: "",

    NETWORK: {
      NAME: "Mumbai",
      SYMBOL: "Matic",
      ID: "0x13881",
    },
    MAX_SUPPLY: 1302,
    price: 0.01,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "opensea",
    MARKETPLACE_LINK: `https://testnets.opensea.io/assets/0x964a508192269C743d9fE03eDd3c51c6F76a56cE/1`,
  });

  const getUserWallet = async (e) => {
    const ethereum = window.ethereum;

    if (ethereum) {
      try {
        const eth = await ethereum.request({ method: "eth_requestAccounts" });
        setWallet(eth);
      } catch (error) {
        setWallet(null);
      }
    } else {
      alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const CheckWalletConnection = () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask");
      return;
    }
    console.log(ethereum.selectedAddress);
  };

  async function addPolygonTestnetNetwork() {
    const { ethereum } = window;

    try {
      //si el usuario ya tiene matic añadida, se cambia a esa red(en este caso es la testnet de matic)
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }], // Hexadecimal version of 80001, prefixed with 0x
      });
    } catch (error) {
      // si no tiene matic añadimos pedimos permiso para que añada
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x13881", // Hexadecimal version of 80001, prefixed with 0x
                chainName: "POLYGON Mumbai",
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                rpcUrls: [
                  "https://speedy-nodes-nyc.moralis.io/cebf590f4bcd4f12d78ee1d4/polygon/mumbai",
                ],
                blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com/"],
                iconUrls: [""],
              },
            ],
          });
        } catch (addError) {
          console.log("Did not add network");
        }
      }
    }
  }

  const MintNFT = async (num) => {
    const price = CONFIG.price * num;

    try {
      const { ethereum } = window;
      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("connected to chain" + chainId);
      setChain(chainId);
      console.log(CONFIG.NETWORK.ID);
      if (chainId !== CONFIG.NETWORK.ID) {
        setTimeout(() => {
          addPolygonTestnetNetwork();
        }, 2000);

        return;
      }

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONFIG.CONTRACT_ADDRESS,
          contract.output.abi,
          signer
        );

        setIsMinting(true);
        let nftTxn = await connectedContract.mint(num, {
          value: ethers.utils.parseEther(price.toString()),
        });
        console.log("Mining...please wait.");
        await nftTxn.wait();
        setIsMinting(false);
        setMinted(true);

        setTxn(`https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
      } else {
      }
    } catch (error) {
      //añadir mensaje de error
      setIspending(false);
      setIsMinting(false);
    }
  };

  const getNFTsMinted = async () => {
    const { ethereum } = window;

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        CONFIG.CONTRACT_ADDRESS,
        contract.output.abi,
        signer
      );

      const txn = await connectedContract.totalSupply();
      const totalSupply = parseInt(txn._hex, 16);
      setCurrentSupply(totalSupply);

      console.log(txn);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CheckWalletConnection();
    getNFTsMinted();
  }, [wallet, chain]);
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Carrousel></Carrousel>
      <ConfigNft></ConfigNft>
      <Exclusives></Exclusives>
      <Museum></Museum>
      <Accordion></Accordion>
      <Footer></Footer>
    </div>
  );
}

export default App;

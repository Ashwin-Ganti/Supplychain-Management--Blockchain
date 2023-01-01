import abi from "./contract/Security.json";
import {useState,useEffect} from 'react';
import {ethers} from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";


import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xD3AE59b410Ca4Bf35e0C4C57b9b547EE06Ab9c36";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  return (
    
    <div className="App">
      <Buy state={state} />
      <Memos state={state} />
    </div>
  );

}

export default App;

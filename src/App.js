import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Team from "./components/Team";
import Roadmap from "./components/Roadmap";
// import Frame3 from "./components/FooterComponent";
import { FaDiscord, FaSnapchatGhost, FaTwitter } from "react-icons/fa";
import abi from "./components/abi.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
function App() {
  const [account, setAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [chainId, setChainId] = useState("");
  const [owner, setOwner] = useState("");
  const [hasMetaMask, setHasMetaMask] = useState(false);

  const [maxMint, setMaxMint] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [totalFree, setTotalFree] = useState(0);
  const [per, setPer] = useState(0);

  // mainnet
  // rinkeby
  const OkayAzukisContractAddress =
    "0x9b2D3B5615c7e91Ca3605Cf0019591A9E6A70224";
  // const OkayAzukisContractAddress =
  //   "0xCFd0D03778F91445d446fa8D595e97Beb5B9F917";
  // Toast
  const Msg = ({ closeToast, toastProps, hash }) => (
    <div className="[#A07834]">
      Token ${totalSupply + 1} Minted to {account} <br /> Block URI:
      <a
        className="text-underline  text-[#A259FF] text-bold"
        href={`https://etherscan.io/tx/${hash}`}
        target="_blank"
      >
        https://etherscan.io/tx/${hash}
      </a>
      {/* <button>Retry</button> */}
      {/* <button onClick={closeToast}>Close</button> */}
    </div>
  );
  // Error Message
  const ErrorMsg = ({ closeToast, toastProps, e }) => (
    <div className="mx-auto text-[#8f1409] text-bold ">
      {/* Token Minted to ${account} <br /> Block URI: */}
      {e}
      {/* <button>Retry</button> */}
      {/* <button onClick={closeToast}>Close</button> */}
    </div>
  );

  // const displayMsg = () => {
  //   toast(<Msg />)
  //   // toast(Msg) would also work
  // }
  const notify = (hash) =>
    toast(
      <Msg hash={hash} />,

      {
        position: "top-center",

        autoClose: 5000,
        hideProgressBar: true,
        // closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  // Notify Error
  const notifyError = (e) =>
    toast(
      <ErrorMsg e={e} />,

      {
        position: "top-center",

        autoClose: 5000,
        hideProgressBar: true,
        // closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  // toast ENd
  const connect = async () => {
    if (window.ethereum) {
      // alert("detected");
      setHasMetaMask(true);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length) {
          setIsConnected(true);
          setAccount(accounts[0]);
          // console.log(accounts);
        }
      } catch (e) {
        // alert("Error Connecting...");
        console.log(e);
      }
    } else {
      console.log("install Metamast extension to continue");
      setHasMetaMask(false);
    }
  };
  // console.log(isAdmin);

  useEffect(() => {
    async function a() {
      connect();
      if (window.ethereum) {
        setChainId(await window.ethereum.request({ method: "eth_chainId" }));

        //   alert("detected");
        // setHasMetaMask(true);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // if (window.ethereum.isConnected()) {
        //   setIsConnected(true);
        // }

        const OkayAzukisContract = new ethers.Contract(
          OkayAzukisContractAddress,
          abi,
          provider.getSigner()
        );
        // await OkayAzukisContract.mint(
        //   "0x488A8CA56f29BFbe28e6f4cf898D5c3C1455deDa",
        //   "10"
        // );
        let wallet = await provider.getSigner().getAddress();
        // let owner = "0x488A8CA56f29BFbe28e6f4cf898D5c3C1455deDa";
        // let owner1 = BigNumber.from(await OkayAzukisContract.owner());
        // setOwner(owner1._hex);
        // console.log(owner1._hex);
        // if (wallet === owner1._hex) {
        //   setIsAdmin(true);
        // }
        setMaxMint(
          ethers.BigNumber.from(await OkayAzukisContract.maxSupply()).toNumber()
        );
        setTotalFree(
          ethers.BigNumber.from(await OkayAzukisContract.totalFree()).toNumber()
        );

        setTotalSupply(
          ethers.BigNumber.from(
            await OkayAzukisContract.totalSupply()
          ).toNumber()
        );
        setPer((await (100 / maxMint)) * totalSupply);
      } else {
        console.log("install Metamast extension to continue");
        setHasMetaMask(false);
      }
    }
    a();
  }, [chainId, account, per]);
  if (window.ethereum) {
    // setHasMetaMask(true);
    window.ethereum.on("chainChanged", (chainId) => {
      setChainId(chainId);
    });
    window.ethereum.on("accountsChanged", (accounts) => {
      // If user has locked/logout fromMMetaMask, this resets the accounts array to empty
      if (!accounts.length) {
        setAccount("");
        setIsAdmin(false);
        setIsConnected(false);
        // logic to handle what happens once MetaMask is locked
      } else {
        if (accounts[0] == owner) {
          setIsAdmin(true);

          setAccount(accounts[0]);
        } else if (account[0] != owner) {
          setIsAdmin(false);
          setAccount(accounts[0]);
        }
      }
    });
  }
  const transaction = async () => {
    console.log("in");
    // console.log(count);
    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();

      const OkayAzukisContract = new ethers.Contract(
        OkayAzukisContractAddress,
        abi,
        provider.getSigner()
      );
      var c;
      if (totalSupply >= 1000) {
        let options = { value: await OkayAzukisContract.price() };
        try {
          c = await OkayAzukisContract.mint(1, options);
          setTotalSupply(totalSupply + 1);
        } catch (e) {
          notifyError(e.message.split(" ").slice(0, 5).join(" "));
          // console.log("Error:", e.message.split(" ").slice(0, 10).join(" "));
          // alert(e.message);
        }
      } else {
        try {
          c = await OkayAzukisContract.mint(1);
          setTotalSupply(totalSupply + 1);
        } catch (e) {
          notifyError(e.message.split(" ").slice(0, 5).join(" "));
          // console.log("Error:", e.message.split(" ").slice(0, 10).join(" "));
          // alert(e.message);
        }
      }

      console.log("trns", c);

      if (c != undefined) notify(c.hash);
    } else {
      connect();
    }
  };
  console.log(maxMint, totalSupply, per, totalFree);

  const changeeee = () => {
    document.getElementById("footer_text").innerHTML = "Join the community";
    document.getElementById("footer_detail").innerHTML =
      "We are so humbled to have your early support.";
    document.getElementById("btn-1").classList.add("btn1-gradient");
    document.getElementById("btn-2").classList.add("btn2-gradient");
    document
      .getElementById("footer_component")
      .classList.add("footer_component_hover");
    document.getElementById("footer_img").src = "./imgs/group_hover.png";
  };
  const revertChange = () => {
    document.getElementById("footer_text").innerHTML =
      "If you’re a degen...follow the steps below";
    document.getElementById("footer_detail").innerHTML = "Good luck";
    document.getElementById("btn-1").classList.remove("btn1-gradient");
    document.getElementById("btn-2").classList.remove("btn2-gradient");
    document
      .getElementById("footer_component")
      .classList.remove("footer_component_hover");
    document.getElementById("footer_img").src = "./imgs/group.svg";
  };
  return (
    <div className="">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <ToastContainer />

      {/* Nav */}
      <Nav
        isConnected={isConnected}
        hasMetaMask={hasMetaMask}
        connect={connect}
      />
      {/* MAin */}
      <Main
        transaction={transaction}
        chainId={chainId}
        isConnected={isConnected}
        maxMint={maxMint}
        per={per}
        totalSupply={totalSupply}
      />
      {/* Team */}
      <Team />
      {/* Roadmap */}
      <Roadmap />
      {/* Footer */}
      {/* <Frame3
        ifYoureADegen="If you’re a degen...follow the steps below"
        goodLuck="good luck"
        followTwitter="Follow Twitter"
        joinDiscord="Join Discord"
      /> */}
      <div
        onMouseOver={changeeee}
        onMouseOut={revertChange}
        id="footer_component"
        className=" relative md:flex footer_component text-white  px-6 md:px-20 pt-4 md:pt-20 mt-20 w-[80%] md:w-[70%] md:max-h-[300px] md:min-h-[300px] mx-auto rounded-2xl "
      >
        <div className=" sm:w-[70%] md:w-[100%] mx-auto">
          <div id="footer_text" className="text-lg font-bold">
            If you're a degen...follor the steps below
          </div>
          <div id="footer_detail" className="mt-4">
            good luck
          </div>
          <div className="flex mt-8">
            <div
              id="btn-1"
              className=" flex ml-4 sm:ml-0 min-w-[125px] sm:min-w-[140px] text-[10px] sm:text-[12px]  border-2 rounded-xl px-4 py-1"
            >
              <img className="w-8" src="./imgs/vector.svg" />
              <div className="ml-1 md:ml-4">Follow Twitter</div>
            </div>
            <div
              id="btn-2"
              className="flex ml-2 md:ml-12 min-w-[115px] sm:min-w-[150px] text-[10px] md:text-[12px] border-2 rounded-xl px-4 py-1"
            >
              <img className="" src="./imgs/vector-1.svg" />
              <div className=" ml-1 sm:ml-4">Join Discord</div>
            </div>
          </div>
        </div>
        <img
          id="footer_img"
          className="mx-auto md:mr-0 mt-12 md:mt-0"
          src="./imgs/group.svg"
          width="238px"
          height="216px"
        />
      </div>
      <div className="footer bg-[#12062B] h-[200px] mt-[-70px] z-0 ">
        <div className="right flex  justify-between min-w-[200px] relative top-[100px]  max-w-[150px] mx-auto ">
          <a href="https://discord.gg/JNfTxsHTD2" target={"_blank"}>
            <div className="icon hover:bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center pt-2 md:pt-3 hover:text-[#12062B] hover:opacity-100 text-white opacity-50  ">
              {" "}
              <FaDiscord size={"70%"} />{" "}
            </div>
          </a>
          {/* <a href="#" target={"_blank"}> */}
          <div className="icon hover:bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center pt-2 md:pt-3 hover:text-[#12062B] text-white opacity-50 hover:opacity-100 ">
            {" "}
            <FaTwitter size={"70%"} />{" "}
          </div>
          {/* </a> */}
          <a href="#" target={"_blank"}>
            <div className="icon hover:bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center pt-2 md:pt-3 hover:text-[#12062B] text-white opacity-50 hover:opacity-100">
              {" "}
              <FaSnapchatGhost size={"70%"} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Frame2 from "./Mint_btn";
import CustomizedProgressBar from "./CustomizedProgressBar";
function Main({
  maxMint,
  totalSupply,
  per,
  isConnected,
  chainId,
  transaction,
}) {
  return (
    <div className=" md:flex mt-12 h-[70vh] relative">
      {/* <div className="h-[200px] md:hidden"></div> */}
      <div className="md:w-[50%] relative md:pt-32">
        {chainId != "0x4" ? (
          <p className="text-red-800 p-4 text-center md:mt-[-50px]">
            Connect to Rinkyby Testnet
          </p>
        ) : null}
        <button
          className=" button tracking-widest text-white px-12 py-4 border-2 w-[100%] font-bold "
          onClick={isConnected ? transaction : null}
        >
          {isConnected ? `Mint ` : "Waiting.."}
        </button>
        <img
          className=" mt-20 block mx-auto max-w-[280px]  "
          src="./imgs/main-1.png"
          alt=""
        />
      </div>
      <div className="md:w-[50%] relative">
        <div className="md:absolute md:ml-20 mt-12 md:mt-0">
          <Frame2
            score="Score"
            text1={`${totalSupply}/${maxMint}`}
            minted="Minted"
          />
          ;
        </div>
        <img
          className="w-[80%] h-[80%] md:mt-28 mx-auto"
          src="./imgs/main-2.png"
          alt=""
        />
        <div className="px-32 mt-[-80px]">
          <CustomizedProgressBar per={per} />
        </div>
      </div>
    </div>
  );
}

export default Main;

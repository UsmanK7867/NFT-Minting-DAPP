import React, { useState } from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

function Nav({ hasMetaMask, isConnected, connect }) {
  return (
    <div className="flex justify-between mt-4   w-[90%]  lg:w-[80%] mx-auto  items-center tracking-wide text-[0.7rem] md:text-[0.6rem] lg:text-base ">
      <div className="flex  items-center font-bold tracking-wider   text-center sm:mx-0 sm:text-left">
        {/* THE SINNERS <br />
<span className="font-normal tracking-wide mx-auto">Club</span> */}

        <div className="w-12 md:ml-12 h-12 bg-black rounded-full text-white text-lg text-center pt-3">
          T
        </div>
        <div className="text-sm ml-4 hidden md:inline-block">TEXT</div>
      </div>

      <div className="right flex  justify-between min-w-[150px] max-w-[150px] ml-auto ">
        <a href="https://discord.gg/JNfTxsHTD2" target={"_blank"}>
          <div className="icon bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center pt-2 md:pt-3 hover:bg-gray-300 ">
            {" "}
            <FaDiscord color="black" size={"70%"} />{" "}
          </div>
        </a>
        {/* <a href="#" target={"_blank"}> */}
        <div className="icon bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center pt-2 md:pt-3 hover:bg-gray-300 ">
          {" "}
          <FaTwitter color="black" size={"70%"} />{" "}
        </div>
        {/* </a> */}
        <a href="#" target={"_blank"}>
          <div className="icon bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center pt-2 md:pt-3 hover:bg-gray-300 ">
            {" "}
            <FaInstagram color="black" size={"70%"} />
          </div>
        </a>
      </div>
      {/* <div className="sm:hidden ml-auto"></div>

      <div className="ml-auto lg:hidden"></div> */}

      <div
        className="inline-block ml-2 rounded-2xl py-2 md:mr-16 px-4 border-white border-2 bg-black text-white cursor-pointer"
        onClick={isConnected ? null : connect}
      >
        {hasMetaMask ? (
          isConnected ? (
            "Connected"
          ) : (
            "Connect"
          )
        ) : (
          <a
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
          >
            Install MetaMask
          </a>
        )}
      </div>
    </div>
  );
}

export default Nav;

import React from "react";
// import "./Mint_btn.css";
// function App() {
//   return <Frame2 score="Score" text1="0/10000" minted="Minted" />;
// }

// export default App;

export default function Frame2(props) {
  const { score, text1, minted } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-2screen">
        <div className="group-3">
          <div className="overlap-group">
            <img className="subtract" src="./imgs/subtract.svg" />
            <div className="group-1">
              <div className="scorepoppins-normal-black-20px">{score}</div>
              <h1 className="font-semibold text-[32px] mt-6 ">{text1}</h1>
              <div className="mt-8"></div>
              <div className="mintedpoppins-normal-black-20px">{minted}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

function Team() {
  return (
    <div className="pt-[450px] md:pt-0">
      <div className="text-[34px] text-center mt-28 font-bold">text</div>
      <hr className="w-[20%] md:w-[5%] h-1 mt-8 mx-auto bg-black" />
      <div className="text-lg text-center mt-8 ">text</div>

      <div className="mt-28 w-[80%] sm:w-[60%] md:w-[80%]  flex flex-col md:flex-row md:justify-evenly mx-auto">
        <img
          className="inline-block md:w-[25%] "
          src="./imgs/team-a.png "
          alt=""
        />
        <img
          className="inline-block md:w-[25%]  mt-10  md:mt-0 md:ml-20"
          src="./imgs/team-a.png "
          alt=""
        />
        <img
          className="inline-block md:w-[25%]  mt-10  md:mt-0 md:ml-20"
          src="./imgs/team-a.png "
          alt=""
        />
      </div>
      <div className=" border-black border-2 w-[140px] my-8  py-2 text-center mx-auto rounded-2xl font-semibold text-[18px] ">
        ODAABC
      </div>
    </div>
  );
}

export default Team;

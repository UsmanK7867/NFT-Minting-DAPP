import React from "react";
import { Disclosure } from "@headlessui/react";

function Roadmap() {
  return (
    <div className="lg:flex w-[90%] mx-auto mt-28">
      <div className="lg:w-[50%] ">
        <img
          src="./imgs/roadmap.png"
          className="lg:w-[60%] mb-12 lg:mb-0 mx-auto"
          alt=""
        />
      </div>
      <div className="lg:w-[50%]">
        <div className="font-semibold text-[36px]">Roadmap</div>
        <div className=" px-2 py-1">
          {" "}
          <Disclosure>
            <Disclosure.Button className="box3 py-2 w-full text-left text-[18px] font-semibold">
              Phase 1
              <a class="arrow-down-close" onclick="openDropdown(this)"></a>
            </Disclosure.Button>
            <Disclosure.Panel className=" text-[16px] font-[300] px-[20px] pt-[10px] pb-[30px] text-[#7D7987]">
              Our first phase will begin with our free mints. 1000 free mints
              will be stealth minted in our discord to our early and active
              supporters.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className=" px-2 py-1">
          {" "}
          <Disclosure>
            <Disclosure.Button className="box3 py-2 w-full text-left text-[18px] font-semibold">
              Phase 2
              <a class="arrow-down-close" onclick="openDropdown(this)"></a>
            </Disclosure.Button>
            <Disclosure.Panel className=" text-[16px] font-[300] px-[20px] pt-[10px] pb-[30px] text-[#7D7987]">
              Lorem ipsum dolor sit amet.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className=" px-2 py-1">
          {" "}
          <Disclosure>
            <Disclosure.Button className="box3 py-2 w-full text-left text-[18px] font-semibold">
              Phase
              <a class="arrow-down-close" onclick="openDropdown(this)"></a>
            </Disclosure.Button>
            <Disclosure.Panel className=" text-[16px] font-[300] px-[20px] pt-[10px] pb-[30px] text-[#7D7987]">
              Lorem ipsum dolor sit amet.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className=" px-2 py-1">
          {" "}
          <Disclosure>
            <Disclosure.Button className="box3 py-2 w-full text-left text-[18px] font-semibold">
              Duis convallis diam ut felis luctus laoreet?
              <a class="arrow-down-close" onclick="openDropdown(this)"></a>
            </Disclosure.Button>
            <Disclosure.Panel className=" text-[16px] font-[300] px-[20px] pt-[10px] pb-[30px] text-[#7D7987]">
              Lorem ipsum dolor sit amet.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className=" px-2 py-1">
          {" "}
          <Disclosure>
            <Disclosure.Button className="box3 py-2 w-full text-left text-[18px] font-semibold">
              Duis convallis diam ut felis luctus laoreet?
              <a class="arrow-down-close" onclick="openDropdown(this)"></a>
            </Disclosure.Button>
            <Disclosure.Panel className=" text-[16px] font-[300] px-[20px] pt-[10px] pb-[30px] text-[#7D7987]">
              Lorem ipsum dolor sit amet.
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className=" px-2 py-1">
          {" "}
          <Disclosure>
            <Disclosure.Button className=" box3 box3 py-2 w-full text-left text-[18px] font-semibold">
              Etiam nec est vestibulum?
              <a class="arrow-down-close" onclick="openDropdown(this)"></a>
            </Disclosure.Button>
            <Disclosure.Panel className=" text-[16px] font-[300] px-[20px] pt-[10px] pb-[30px] text-[#7D7987] ">
              Lorem ipsum dolor sit amet.
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

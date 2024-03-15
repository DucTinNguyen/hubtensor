"use client";

import ic_ssh from "@/icon/ic_ssh.svg";
import Image from "next/image";
import ic_chevron_down from "@/icon/chevron-down.svg";
import { useState } from "react";

const Setting = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <div className="bg-[#010214] lg:w-[665px]">
        <div className="border border-[#353539] p-3 w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={ic_ssh} alt="icon" className="w-8 h-8 min-w-8" />
            <span className="text-[#fff] text-base font-semibold">
              SSH Public Key
            </span>
          </div>
          <Image
            onClick={() => {
              setShow(!show);
            }}
            src={ic_chevron_down}
            alt="icon"
            className={`w-6 h-6 min-w-6 cursor-pointer ${show && 'rotate-180'} transition-all ease-linear duration-250`}
          />
        </div>
        <div className={`w-full ${show ? 'h-[120px]' : 'h-0'}  transition-all ease-linear duration-250`}>
          <textarea className={` w-full h-full bg-[#0d0e1f] text-[#fff] text-base outline-none resize-none ${show && " p-3 border border-[#353539]"}`}/>
        </div>
      </div>
    </div>
  );
};

export default Setting;

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import ic_eth from "@/public/icons/ic-eth.svg";
import ic_type from "@/public/icons/ic-type.svg";
import elispe from "@/public/images/miner/elipse.png";
import elipse1 from "@/public/images/miner/elipse1.png";
import Image from "next/image";
interface Props {
  price: number;
  icon_type: StaticImport;
  cpu: number;
  gpu: string | string;
  memory: number;
  storage: string;
  os: string;
}

const Card = ({ icon_type, price, cpu, gpu, memory, storage, os }: Props) => {
  return (
    <section className="p-6 border border-[#353539] flex flex-col gap-6 bg-gradient-card relative">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-sm font-normal text-[#6C3BEF]">Price</span>
          <p className="flex items-center space-x-2">
            <Image src={ic_eth} alt="icon eth" />
            <span className="text-[#FFFFFF] text-[32px] font-bold">
              {price}
            </span>
          </p>
        </div>
        <Image src={icon_type} alt="icon type" />
      </div>

      <div className="flex flex-col gap-3">
        <p className="flex flex-col space-y-1">
          <span className="text-sm font-normal text-[#918DA4]">CPU</span>
          <span className="text-base text-[#fff] font-bold">{cpu} cores</span>
        </p>
        <p className="flex flex-col space-y-1">
          <span className="text-sm font-normal text-[#918DA4]">GPU</span>
          <span className="text-base text-[#fff] font-bold">{gpu}</span>
        </p>
        <p className="flex flex-col space-y-1">
          <span className="text-sm font-normal text-[#918DA4]">Memory</span>
          <span className="text-base text-[#fff] font-bold">{memory} GB</span>
        </p>
        <p className="flex flex-col space-y-1">
          <span className="text-sm font-normal text-[#918DA4]">Storage</span>
          <span className="text-base text-[#fff] font-bold">{storage}</span>
        </p>
        <p className="flex flex-col space-y-1">
          <span className="text-sm font-normal text-[#918DA4]">OS</span>
          <span className="text-base text-[#fff] font-bold">{os}</span>
        </p>
      </div>
      <button className="btn w-full py-2 flex items-center justify-center">
        <p className="bg-[#fdfeff] w-full py-2 rounded-lg font-semibold text-base">Buy</p>
      </button>
      <Image className="absolute bottom-0 right-0" src={elispe} alt="elipse" />
      <Image src={elipse1} alt="elipse" className="absolute top-0 left-0" />
    </section>
  );
};

export default Card;

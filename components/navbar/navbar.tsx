import bgDashBoard from "@/public/dashboard.png";
import icMetamask from "@/public/icon_metamask.svg";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { formatEther } from "viem";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import logo from "@/images/logo/logo_mb.png";
import { Navbar, NavbarContent } from "@nextui-org/react";
import { BurguerButton } from "./burguer-button";
interface Props {
  children: React.ReactNode;
}

const pathNames = [
  {
    name: "/miner",
    text: "Miner",
  },
  {
    name: "/validator",
    text: "Validator",
  },
  {
    name: "/lite-node",
    text: "Subtensor Lite Node",
  },
  {
    name: "/archive-node",
    text: "Subtensor Archive Node",
  },
  {
    name: "/subnet",
    text: "Subnet",
  },
  {
    name: "/dashboard",
    text: "Dashboard",
  },
  {
    name: "/billing",
    text: "Payment History",
  },
  {
    name: "/settings",
    text: "Settings",
  },
  {
    name: "/tutorials",
    text: "Tutorials",
  },
  {
    name: "/help-center",
    text: "Help Center",
  },
  {
    name: "/staking",
    text: "Staking",
  },
  {
    name: "/governance",
    text: "Governance",
  },
];

export const NavbarWrapper = ({ children }: Props) => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const data = useBalance({
    address: address,
  });

  const pathName = usePathname();

  const handleConnect = () => {
    open();
  };
  const handleDisconected = () => {
    disconnect();
  };

  const renderTitle = (title: string) => {
    return pathNames.find((item) => item.name === title)?.text;
  };

  return (
    <div className="relative overflow-y-auto overflow-x-hidden w-full min-h-screen">
      <Image src={bgDashBoard} alt="bgDashboard" fill priority />
      <div className="relative w-full">
        <Navbar
          className="w-full bg-unset px-4 lg:px-10"
          classNames={{
            wrapper: "w-full max-w-full p-0 flex justify-between",
          }}
        >
          <p className="text-[#FFFFFF] text-xl font-bold hidden lg:block">
            {renderTitle(pathName)}
          </p>
          <div className="hidden lg:flex items-center space-x-4 text-[#fff] font-jetbrain">
            <p className="flex items-center space-x-3 text-sm">
              <span>Balance:</span>
              <span className="text-sm foπnt-medium text-[#6C3BEF]">
                $
                {data?.data?.value
                  ? Number(formatEther(data?.data?.value)).toFixed(5)
                  : "0"}
              </span>
            </p>
            {address ? (
              <div
                onClick={handleDisconected}
                className="flex items-center text-[#fff] text-sm space-x-2 wallet cursor-pointer"
              >
                <Image
                  className="w-6 h-6 min-w-6"
                  src={icMetamask}
                  alt="icon"
                />
                <span>{address.slice(0, 5) + "..." + address.slice(-5)}</span>
              </div>
            ) : (
              <p
                onClick={handleConnect}
                className="flex items-center text-[#fff] text-sm space-x-2 wallet cursor-pointer"
              >
                Connect Wallet
              </p>
            )}
          </div>
          <div className="lg:hidden flex w-full items-center justify-between">
            <Image src={logo} alt="logo" width={240} height={30} />
            <BurguerButton />
          </div>
        </Navbar>
        {children}
      </div>
    </div>
  );
};

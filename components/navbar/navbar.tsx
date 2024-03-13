import { Navbar, NavbarContent } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { BurguerButton } from "./burguer-button";
import bgDashBoard from "@/public/dashboard.png";
import Image from "next/image";
import icMetamask from "@/public/icon_metamask.svg";
import ButtonConnectWallet from "../btn-connect";
import { formatEther } from "viem";
import { useWeb3Modal } from "@web3modal/wagmi/react";
interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const data = useBalance({
    address: address,
  });

  const handleConnect = () => {
    open()
  }
  const handleDisconected = () => {
    disconnect();
  };

  return (
    <div className="relative overflow-y-auto overflow-x-hidden w-full min-h-screen">
      <Image src={bgDashBoard} alt="bgDashboard" fill priority />
      <div className="relative w-full">
        <Navbar className="w-full bg-transparent backdrop-saturate-[none]">
          <NavbarContent className="md:hidden bg-white">
            <BurguerButton />
          </NavbarContent>

          <div className="flex items-center justify-between w-full">
            <p className="text-[#FFFFFF] text-xl font-bold">Dashboard</p>
            <div className="flex items-center space-x-4 text-[#fff] font-jetbrain">
              <p className="flex items-center space-x-3 text-sm">
                <span>Balance:</span>
                <span className="text-sm font-medium text-[#6C3BEF]">
                  $
                  {data?.data?.value
                    ? Number(formatEther(data?.data?.value)).toFixed(5)
                    : "0"}
                </span>
              </p>
              {address ? (
                <div
                  onClick={handleDisconected}
                  className="flex items-center text-[#fff] text-sm space-x-2 wallet"
                >
                  <Image
                    className="w-6 h-6 min-w-6"
                    src={icMetamask}
                    alt="icon"
                  />
                  <span>{address.slice(0, 5) + "..." + address.slice(-5)}</span>
                </div>
              ) : (
                <p onClick={handleConnect} className="flex items-center text-[#fff] text-sm space-x-2 wallet">Connect Wallet</p>
              )}
            </div>
          </div>

          {/* {address ? <div className="flex w-full justify-end items-center space-x-4">
          <div className="flex items-center space-x-4">
            <p>{resolvedTheme === 'light' ? 'Light' : 'Dark'}</p>
            <Switch
              isSelected={resolvedTheme === "dark" ? true : false}
              onValueChange={(e) => setTheme(e ? "dark" : "light")}
            />
          </div>

          <p>
            <span>Balance:</span>
            <span>${data?.data?.value ? Number(formatEther(data?.data?.value)).toFixed(5) : '0'}</span>
          </p>
          <UserDropdown />
          
        </div> : <ButtonConnectWallet className="flex w-full justify-end"/>} */}
        </Navbar>
        {children}
      </div>
    </div>
  );
};

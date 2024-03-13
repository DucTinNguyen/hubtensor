import { Navbar, NavbarContent } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import React from "react";
import { useAccount, useBalance } from "wagmi";
import { BurguerButton } from "./burguer-button";
import bgDashBoard from '@/public/dashboard.png'
import Image from "next/image";
interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {

  const { address } = useAccount();

  const data = useBalance({
    address: address,
  });



  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full min-h-screen">
      <Image src={bgDashBoard} alt="bgDashboard" fill priority />
      <Navbar
        className="w-full bg-transparent backdrop-saturate-[none]"
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>

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
  );
};

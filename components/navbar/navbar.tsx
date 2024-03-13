import { Input, Link, Navbar, NavbarContent, Switch } from "@nextui-org/react";
import React from "react";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";
import { GithubIcon } from "../icons/navbar/github-icon";
import { SupportIcon } from "../icons/navbar/support-icon";
import { SearchIcon } from "../icons/searchicon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { useAccount, useBalance, useEnsAvatar, useEnsName } from "wagmi";
import { sliceAddress } from "@/lib/account";
import ButtonConnectWallet from "../btn-connect";
import { formatEther } from "viem";
import { useTheme as useNextTheme } from "next-themes";
interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {

  const { address } = useAccount();

  const data = useBalance({
    address: address,
  });

  const { setTheme, resolvedTheme } = useNextTheme();


  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>

        {address ? <div className="flex w-full justify-end items-center space-x-4">
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
          
        </div> : <ButtonConnectWallet className="flex w-full justify-end"/>}
      </Navbar>
      {children}
    </div>
  );
};

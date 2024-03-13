import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import { DarkModeSwitch } from "./darkmodeswitch";
import { useAccount, useDisconnect } from "wagmi";
import Image from "next/image";
import iconMetamask from '@/public/icon_metamask.svg'
import { sliceAddress } from "@/lib/account";

export const UserDropdown = () => {

  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const handleLogOut = () => {
    disconnect();
  }

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <div className="flex items-center space-x-3">
            <Image src={iconMetamask} alt="icon" width={20} height={20} />
            <span>{sliceAddress((address) as string)}</span>
          </div>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
      // onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem onClick={handleLogOut} key="logout" color="danger" className="text-danger ">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

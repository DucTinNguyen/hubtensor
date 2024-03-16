import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { StyledBurgerButton } from "./navbar.styles";
import Image from "next/image";
import menu from "@/icon/menu.svg";

export const BurguerButton = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <div
      className={StyledBurgerButton()}
      // open={collapsed}
      onClick={setCollapsed}
    >
      <Image src={menu} alt="menu" />
    </div>
  );
};

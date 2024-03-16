import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import clsx from "clsx";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  title: string;
  icon: StaticImport;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 1000) {
      setCollapsed();
    }
  };
  return (
    <NextLink
      href={href}
      className="text-default-900 active:bg-none max-w-full"
    >
      <div
        className={clsx(
          isActive
            ? "bg-gradient-sidebar border-l-[4px] border-[#6C3BEF]"
            : "hover:bg-gradient-sidebar",
          "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 cursor-pointer transition-all duration-150 active:scale-[0.98]"
        )}
        onClick={handleClick}
      >
        <Image src={icon} alt="icon" />
        <span className="text-[#918DA4] text-sm font-semibold">{title}</span>
      </div>
    </NextLink>
  );
};

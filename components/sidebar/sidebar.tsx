import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";
import logo from '@/public/black.png'
import logoDark from '@/public/white.png'
import Image from "next/image";
import { useTheme as useNextTheme } from "next-themes";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();
  const { setTheme, resolvedTheme } = useNextTheme();

  return (
    <aside className="h-screen z-[40] sticky top-0 sidebar">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={`w-[300px] bg-[#000110] ${Sidebar({
          collapsed: collapsed,
        })}`}
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M31.7208 34.2177L48.9982 46.2809L33.2775 46.2809L15.4033 34.2177L31.7208 34.2177Z" fill="#FDFDFD" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.63 17.7191L15.0019 17.7191L21.1121 24.4954L31.5692 24.4954L31.5692 34.2171L29.8784 34.2171L29.8788 34.2176L45.6572 34.2176L45.6572 23.4068L37.63 17.7191Z" fill="#FDFDFD" />
          </svg>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarMenu title="Services">
              <SidebarItem
                isActive={pathname === "/miner"}
                title="Miner"
                icon={<AccountsIcon />}
                href="miner"
              />
              <SidebarItem
                isActive={pathname === "/validator"}
                title="Validator"
                href="validator"
                icon={<PaymentsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/lite-node"}
                title="Subtensor Lite Node"
                href="light-node"
                icon={<PaymentsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/archive-node"}
                title="Subtensor Archive Node"
                href="archive-node"
                icon={<PaymentsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/subnet"}
                title="Subnet"
                href="subnet"
                icon={<PaymentsIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="Account">
              <SidebarItem
                isActive={pathname === "/dashboard"}
                title="Dashboard"
                icon={<AccountsIcon />}
                href="dashboard"
              />
              <SidebarItem
                isActive={pathname === "/billing"}
                title="Payment History"
                icon={<PaymentsIcon />}
                href="billing"
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Setting"
                icon={<PaymentsIcon />}
                href="settings"
              />

            </SidebarMenu>

            <SidebarItem
              title="Tutorials"
              icon={<HomeIcon />}
              isActive={pathname === "/tutorials"}
              href="/tutorials"
            />
            <SidebarItem
              title="Help Center"
              icon={<HomeIcon />}
              isActive={pathname === "/help-center"}
              href="/help-center"
            />
            <SidebarItem
              title="Staking"
              icon={<HomeIcon />}
              isActive={pathname === "/staking"}
              href="/staking"
            />
            <SidebarItem
              title="Governance"
              icon={<HomeIcon />}
              isActive={pathname === "/governance"}
              href="/governance"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

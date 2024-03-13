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
    <aside className="h-screen z-[40] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={`w-[300px] ${Sidebar({
          collapsed: collapsed,
        })}`}
      >
        <div className={`flex flex-col items-center`}>
          <Image src={resolvedTheme==='light' ? logo : logoDark} alt="logo"/>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
           
            <SidebarMenu title="General">
              <SidebarItem
                isActive={pathname === "/dashboard"}
                title="Dashboard"
                icon={<AccountsIcon />}
                href="dashboard"
              />
              <SidebarItem
                isActive={pathname === "/service-session"}
                title="Service session"
                href="service-session"
                icon={<PaymentsIcon />}
              />
              {/* <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              />
               */}
            </SidebarMenu>

            <SidebarMenu title="Service">
              <SidebarItem
                isActive={pathname === "/vpn"}
                title="VPN"
                icon={<AccountsIcon />}
                href="vpn"
              />
              <SidebarItem
                isActive={pathname === "/gpu"}
                title="CPU/GPU rental"
                icon={<PaymentsIcon />}
                href="gpu"

              />
              
            </SidebarMenu>


            <SidebarMenu title="Account">
              <SidebarItem
                isActive={pathname === "/billing"}
                title="Billing"
                icon={<DevIcon />}
                href="billing"
              />
              <SidebarItem
                isActive={pathname === "/invoice"}
                title="Invoices"
                icon={<ViewIcon />}
                href="invoice"
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                href="settings"
                icon={<SettingsIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="Administrations">
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Add a new node", "Idle jobs", "Sessions"]}
                title="Manage Nodes"
                href={['addnode', 'idlejobs', 'sessions']}
              />
              
            </SidebarMenu>
            <SidebarItem
              title="Staking"
              icon={<HomeIcon />}
              isActive={pathname === "/staking"}
              href="/staking"
            />
            <SidebarItem
              title="Notifications"
              icon={<HomeIcon />}
              isActive={pathname === "/notifications"}
              href="/notifications"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

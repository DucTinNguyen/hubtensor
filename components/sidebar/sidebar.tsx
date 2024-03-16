import { useTheme as useNextTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "../layout/layout-context";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";
import icMetamask from "@/public/icon_metamask.svg";

import logo from '@/images/logo/logo.png';
import ic_archivernode from '@/public/sidebar/archivenode.svg';
import ic_billing from '@/public/sidebar/billing.svg';
import ic_dashboard from '@/public/sidebar/dashboard.svg';
import ic_governance from '@/public/sidebar/governance.svg';
import ic_helpcenter from '@/public/sidebar/helpcenter.svg';
import ic_lightnode from '@/public/sidebar/lightnode.svg';
import ic_miner from '@/public/sidebar/miner.svg';
import ic_setting from '@/public/sidebar/settings.svg';
import ic_staking from '@/public/sidebar/staking.svg';
import ic_subnet from '@/public/sidebar/subnet.svg';
import ic_tutorial from '@/public/sidebar/tutorials.svg';
import ic_validator from '@/public/sidebar/validator.svg';
import Image from "next/image";
import { formatEther } from "viem";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";


export const SidebarWrapper = () => {
  const { address } = useAccount();
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();
  const { setTheme, resolvedTheme } = useNextTheme();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();

  const data = useBalance({
    address: address,
  });
  const handleConnect = () => {
    open();
  };
  const handleDisconected = () => {
    disconnect();
  };
  return (
    <aside className="h-screen z-[40] sticky top-0 sidebar">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={`w-full md:w-[400px] lg:w-[300px] bg-[#000110] ${Sidebar({
          collapsed: collapsed,
        })}`}
      >
        <div>
          <Image alt="logo" src={logo} className="hidden lg:block" />
          <div className="flex lg:hidden items-center justify-between space-x-4 text-[#fff] font-jetbrain">
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
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarMenu title="Services">
              <SidebarItem
                isActive={pathname === "/miner" || pathname === "/"}
                title="Miner"
                icon={ic_miner}
                href="miner"
              />
              <SidebarItem
                isActive={pathname === "/validator"}
                title="Validator"
                href="validator"
                icon={ic_validator}
              />
              <SidebarItem
                isActive={pathname === "/lite-node"}
                title="Subtensor Lite Node"
                href="lite-node"
                icon={ic_lightnode}
              />
              <SidebarItem
                isActive={pathname === "/archive-node"}
                title="Subtensor Archive Node"
                href="archive-node"
                icon={ic_archivernode}
              />
              <SidebarItem
                isActive={pathname === "/subnet"}
                title="Subnet"
                href="subnet"
                icon={ic_subnet}
              />
            </SidebarMenu>

            <SidebarMenu title="Account">
              <SidebarItem
                isActive={pathname === "/dashboard"}
                title="Dashboard"
                icon={ic_dashboard}
                href="dashboard"
              />
              <SidebarItem
                isActive={pathname === "/billing"}
                title="Payment History"
                icon={ic_billing}
                href="billing"
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Setting"
                icon={ic_setting}
                href="settings"
              />

            </SidebarMenu>

            <SidebarItem
              title="Tutorials"
              icon={ic_tutorial}
              isActive={pathname === "/tutorials"}
              href="/tutorials"
            />
            <SidebarItem
              title="Help Center"
              icon={ic_helpcenter}
              isActive={pathname === "/help-center"}
              href="/help-center"
            />
            <SidebarItem
              title="Staking"
              icon={ic_staking}
              isActive={pathname === "/staking"}
              href="/staking"
            />
            <SidebarItem
              title="Governance"
              icon={ic_governance}
              isActive={pathname === "/governance"}
              href="/governance"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

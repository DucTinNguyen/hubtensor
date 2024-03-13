import { useTheme as useNextTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { useSidebarContext } from "../layout/layout-context";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";

import ic_miner from '@/public/sidebar/miner.svg'
import ic_validator from '@/public/sidebar/validator.svg'
import ic_lightnode from '@/public/sidebar/lightnode.svg'
import ic_archivernode from '@/public/sidebar/archivenode.svg'
import ic_subnet from '@/public/sidebar/subnet.svg'
import ic_dashboard from '@/public/sidebar/dashboard.svg'
import ic_billing from '@/public/sidebar/billing.svg'
import ic_setting from '@/public/sidebar/settings.svg'
import ic_tutorial from '@/public/sidebar/tutorials.svg'
import ic_helpcenter from '@/public/sidebar/helpcenter.svg'
import ic_staking from '@/public/sidebar/staking.svg'
import ic_governance from '@/public/sidebar/governance.svg'


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

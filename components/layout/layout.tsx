

import React, { useEffect } from "react";
import { useLockedBody } from "../hooks/useBodyLock";
import { NavbarWrapper } from "../navbar/navbar";
import { SidebarWrapper } from "../sidebar/sidebar";
import { SidebarContext } from "./layout-context";
import { useAccount } from "wagmi";


interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [clientOnly, setClientOnly] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  useEffect(() => {
    setClientOnly(true);
  }, [])

  return (
    <>
      {
        clientOnly && <SidebarContext.Provider
          value={{
            collapsed: sidebarOpen,
            setCollapsed: handleToggleSidebar,
          }}
        >
          <section className="flex w-full">
            <SidebarWrapper />
            <NavbarWrapper>
              <div className="p-4 md:p-6 lg:p-10">
                {children}
              </div>
            </NavbarWrapper>
          </section>
        </SidebarContext.Provider>
      }
    </>


  );
};

import { tv } from "@nextui-org/react";

export const SidebarWrapper = tv({
  base: "transition-transform h-full fixed -translate-x-full w-64 shrink-0 z-[202] overflow-y-auto border-r border-[#353539] flex-col py-20 lg:py-6 px-3 lg:ml-0 lg:flex lg:static lg:h-screen lg:translate-x-0 ",

  variants: {
    collapsed: {
      true: "translate-x-0 ml-0 [display:inherit]",
    },
  },
  // ""
  //   "@md": {
  //     marginLeft: "0",
  //     display: "flex",
  //     position: "static",
  //     height: "100vh",
  //     transform: "translateX(0)",
  //   },
  //   variants: {
  //     collapsed: {
  //       true: {
  //         display: "inherit",
  //         marginLeft: "0 ",
  //         transform: "translateX(0)",
  //       },
  //     },
  //   },
});
export const Overlay = tv({
  base: "bg-[rgba(19,19,19,0.50)] fixed inset-0 z-[201] opacity-80 transition-opacity md:hidden md:z-auto md:opacity-100",
});

export const Header = tv({
  base: "flex gap-8 items-center px-6",
});

export const Body = tv({
  base: "flex flex-col gap-3 mt-9 px-2",
});

export const Footer = tv({
  base: "flex items-center justify-center gap-6 pt-16 pb-8 px-8 md:pt-10 md:pb-0",
});

export const Sidebar = Object.assign(SidebarWrapper, {
  Header,
  Body,
  Overlay,
  Footer,
});

import type { NextPage } from "next";
import { Content } from "@/components/home/content";
import Dashboard from "./dashboard/page";

const Home: NextPage = () => {
  // return <Content />;
  return (
    <Dashboard />
  )
};

export default Home;

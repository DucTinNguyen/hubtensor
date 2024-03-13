import type { NextPage } from "next";
import { Content } from "@/components/home/content";
import Dashboard from "./dashboard/page";
import Miner from "./miner/page";

const Home: NextPage = () => {
  // return <Content />;
  return (
    <Miner />
  )
};

export default Home;

import {
  LandingPage, MultiColumnPage, TNavPageCollection
} from "@molitio/ui-core";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const pageCollection: TNavPageCollection = {
    tag: "ui-molitio-com",
    siteDisplayName: "molitio.com",
  };

  const pageSections: JSX.Element[] = [];


  return (
    <LandingPage>
      molitio.com - landing
     {/*  <MultiColumnPage layoutColumns={pageSections}></MultiColumnPage> */}
    </LandingPage>
  );
};

export default Home;

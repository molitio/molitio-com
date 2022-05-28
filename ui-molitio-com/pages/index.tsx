import React from "react";
import {
  LandingPage,
  MultiColumnPage,
  PageSection,
  TNavPageCollection,
} from "@molitio/ui-core";
import type { NextPage } from "next";
import Emoji from "../components/Emoji";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const pageCollection: TNavPageCollection = {
    tag: "ui-molitio-com",
    siteDisplayName: "molitio.com",
  };

  const message: () => JSX.Element = () =>
    React.createElement("div", null, "hi");

  const pageSections: PageSection[] = [{ anchor: "home", element: message() }];

  return (
    <div>
      <div className={`${styles.background} `}></div>
      <div className={`${styles.masklayer}`}></div>
      <div className={`${styles.page}`}>
        <header>
          <h1 className={styles.header}>molitio</h1>
        </header>
        <main className={styles.content}></main>
        <div className={styles.message}>
          in a process of something awesome...{" "}
          <Emoji label="seedling" symbol="🌱" />
        </div>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};

export default Home;

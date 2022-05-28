import "../styles/globals.scss";
import "../styles/variables.scss";
import type { AppProps } from "next/app";
import { AppShell } from "@molitio/ui-core";

function UiMolitioCom({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default UiMolitioCom;

import "../styles/global.scss";
import { ChakraProvider } from "@chakra-ui/react";

import NProgress from "nprogress";
import Router from "next/router";
import Page from "../components/Page/Page";

import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
}

export default MyApp;

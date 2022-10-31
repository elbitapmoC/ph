import "../styles/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import NProgress from "nprogress";
import Router from "next/router";
import Page from "../components/Page/Page";
import { QueryClient, QueryClientProvider } from "react-query";
import "nprogress/nprogress.css";

// Dev tool for react query
// import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

// Progress Bar
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
        {/* <ReactQueryDevtools /> */}
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

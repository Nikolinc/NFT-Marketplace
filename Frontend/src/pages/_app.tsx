import { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "@/components/NavBar/Navbar";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="shortcut icon" href="../public/favicon.svg" />
      <title>NFT Marketplace</title>
      <meta
        name="description"
        content="I hope this tutorial is helpful for you"
      />
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </>
);
export default appWithTranslation(MyApp);

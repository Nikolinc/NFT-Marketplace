import { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "@/components/NavBar/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps}  />
  </>
);
export default MyApp;

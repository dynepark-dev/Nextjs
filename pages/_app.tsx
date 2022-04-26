import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Search />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Homepage from "./homepage";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <Homepage {...pageProps} />;
}

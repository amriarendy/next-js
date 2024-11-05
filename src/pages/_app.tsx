import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Shell from "@/components/layouts/shell";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Shell />
      <Component {...pageProps} />
    </>
  );
}

import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`
  *, html, body {
    padding: 0;
    margin: 0; 
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  hr{
    display: block;
    border: 0;
    border-top: 2px solid #ccc;
  }
`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}

import { createGlobalStyle } from "styled-components"
import { CartContextProvider } from "@/components/CartConetxt";
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto&display=swap');
  body {
    
    padding: 0;
    margin: 0; 
    font-family: 'Roboto', sans-serif;
  }
  hr{
    display: block;
    border: 0;
    border-top: 2px solid #ccc;
  }
`;

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <CartContextProvider>
        <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
      
    </>
  )
}

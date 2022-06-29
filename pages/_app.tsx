import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/globalstyles";
import { SiteWrap } from "../components/sharedstyles";

const theme: DefaultTheme = {
  colors: {
    bg: "#333",
    surface: "#eee",
    primary: "#333",
    secondary: "gold",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SiteWrap>
          <Component {...pageProps} />
        </SiteWrap>
      </ThemeProvider>
    </>
  );
}

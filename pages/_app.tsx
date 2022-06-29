import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/globalstyles";
import { SiteWrap } from "../components/sharedstyles";

const theme = {
  colors: {
    surface: "#eee",
    primary: "#333",
    secondary: "gold",
  },
};

export default function App({ Component, pageProps }) {
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

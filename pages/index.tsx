import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../components/sharedstyles";
import Cards from "../components/cards";
import LogoComponent from "../components/logoComponent";
import ImageComponent from "../components/imageComponent";
import sLogo from "../public/gucci-bag.jpeg";
export default function Home() {
  return (
    <Container>
      <Head>
        <title>NFMINTEA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <LogoComponent />
        <Title>ReSelfridges NFT</Title>
        <ImageComponent img={sLogo} />
        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  );
}

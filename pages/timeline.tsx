import { Container, Main, Title } from "../components/sharedstyles";

import TimelineComponent from "../components/Timeline";
import LinkOrButton from "../components/LinkOrButton";
import LogoComponent from "../components/logoComponent";

const previousTransactions = [
  {
    walletId: "selfridges.eth",
    transactionId:
      "0xf0c2da24644208d81b7077314216718d81e46c808a928e880c1575f64f68275e",
    date: "26/11/2021",
    price: "£1000.00",
  },
  {
    walletId: "snoopdog.eth",
    transactionId:
      "0x673d14d751b51f27f3f87d5f9577c674c6288890443a9cb779b8eb3f6116932b",
    date: "25/02/2022",
    price: "£2000.00",
  },
  {
    walletId: "selfridges.eth",
    transactionId:
      "0xc8d4ef9ab9b1534d06d71db86f9fa52092b6071f8e8c86dff8e8bd0741b6ab05",
    date: "30/04/2022",
    price: "£5000.00",
  },
];

const Timeline: React.FC = () => (
  <Container>
    <Main>
      <LogoComponent />
      <Title>Timeline</Title>
      <h2>Gucci Bag</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta adipisci
        magnam esse, repellendus provident pariatur laborum laudantium repellat
        reiciendis odit molestiae autem consequatur aut veniam.
      </p>
      <TimelineComponent transactions={previousTransactions} />
      <LinkOrButton href="/">Go Back</LinkOrButton>
    </Main>
  </Container>
);

export default Timeline;

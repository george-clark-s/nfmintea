import styled from "styled-components";

const SiteWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  padding: 0 0.5rem;
  background white;
  max-width: 40rem;
`;
const Main = styled.main`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin: 2rem 0;
  }
`;

const Logo = styled.div`
  max-width: 20rem;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1;
  font-size: 1.5rem;
  margin: 0.5rem;
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const CtaRow = styled.div`
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export { SiteWrap, Container, Main, Logo, Title, Description, CtaRow };

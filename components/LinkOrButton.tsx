import styled from "styled-components";
import Link from "next/link";

interface LinkOrButtonProps {
  href?: string;
  children: React.ReactNode;
}

const LinkOrButton: React.FC<LinkOrButtonProps> = ({ href, children }) => {
  if (href) {
    return (
      <Link href={href}>
        <Button as="a" href={href}>
          {children}
        </Button>
      </Link>
    );
  }

  return <Button>{children}</Button>;
};

export default LinkOrButton;

const Button = styled.button`
  background-color: #ffe256;
  color: #212121;
  text-align: center;
  padding: 10px;
  border: none;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    background-color: #ffc456;
  }
`;

import styled from "styled-components";
import Image from "next/image";

const ImageWrap = styled.div`
  max-width: 30rem;
`;
const ImageComponent = ({ img }) => (
  <ImageWrap>
    <Image src={img} height={1328} width={1020} />
  </ImageWrap>
);
export default ImageComponent;

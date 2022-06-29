import styled from "styled-components";
import Image from "next/image";
import About from "../pages/about";

const ImageWrap = styled.div<{ small: boolean }>`
  position: relative;
  ${({ small }) => (small ? `max-width: 15rem;` : `max-width:30rem;`)}
  .badge {
    z-index: 99;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: dodgerblue;
    border-radius: 100%;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
    p {
      margin: 0;
    }
  }
`;
const ImageComponent = ({ img, badge, small }) => (
  <ImageWrap small={small}>
    {badge && (
      <div className="badge">
        <p>Verified</p>
        <p>Authentic!</p>
      </div>
    )}
    <Image src={img} height={1328} width={1020} />
  </ImageWrap>
);
export default ImageComponent;

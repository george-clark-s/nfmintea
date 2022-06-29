import Image from "next/image";
import { Logo } from "../components/sharedstyles";
import sLogo from "../public/sLogo.svg";
const LogoComponent = () => (
  <Logo>
    <Image src={sLogo} />
  </Logo>
);
export default LogoComponent;

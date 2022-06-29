import Image from "next/image";
import { Logo } from "./sharedstyles";
import sLogo from "../public/sLogo.svg";
const LogoComponent = () => (
  <Logo>
    <Image src={sLogo} width={520} height={60} />
  </Logo>
);
export default LogoComponent;

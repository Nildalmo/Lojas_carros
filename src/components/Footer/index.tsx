import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import FooterContainer from "./footer.style";
import { BiSolidCar } from "react-icons/bi";

const Footer = () => {
  return (
    <header>
      <text>
        Vendas
        <text>Market</text>
      </text>
      <text>&copy; N.M.S 2023 - Todos os direitos reservados.</text>

      <FooterContainer>
        <text>Redes Sociais/site uteis</text>
      </FooterContainer>
      <FooterContainer>
        <Link href="https://instagram.com">
          <FaInstagram />
        </Link>
        <Link href="https://youtube.com">
          <FaYoutube />
        </Link>
        <Link href="https://twitter.com">
          <FaTwitter />
        </Link>
        <Link href="https://www.facebook.com">
          <FaFacebook />
        </Link>
        <Link href="https://goias.gov.br/detran/">
          <BiSolidCar />
        </Link>
      </FooterContainer>
    </header>
  );
};

export default Footer;

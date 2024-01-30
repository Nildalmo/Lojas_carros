import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import * as S from "./header.style";
import { BiLogIn } from "react-icons/bi";
import { NavBar } from "./header.style";

const Header = () => {
  return (
    
    <header>
      <NavBar>
        <text>POWER MOTORS</text>

        <ul>
          <a href="/">
            <img src="/logo.png" alt="Carro a Vendas" />
          </a>
       </ul>
        <S.Li>
          <a href="/Compra">
            <FaShoppingCart />
          </a>

          <Link href="/login">
            <BiLogIn />
          </Link>
        </S.Li>
      </NavBar>
    </header>
  );
};

export default Header;

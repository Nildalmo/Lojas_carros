import { Img } from "@chakra-ui/react";
import Link from "next/link";
import { NavBar } from "./header.style";
import { FaShoppingCart } from "react-icons/fa";
import {  Box, Flex } from "@chakra-ui/react";
import {  FaInstagram, FaYoutube, FaTwitter,FaFacebook } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <NavBar>
        <ul>
          <li>
            <a href="/">
              <Img
                src="/logo.png"
                alt="Carro a Vendas"
                width="80"
                height="80"
              />
            </a>
          </li>

          <li>
            <a href="/Compra">
              <FaShoppingCart />
              Carrinho
            </a>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
        <span>
          <input
            type="text"
            className="campo-pesquisa"
            placeholder="Pesquisar...."
          />
          <button className="botao-pesquisa">Buscar</button>
        </span>
      </NavBar>
    <Box>
    <Flex>
            <Link href="https://www.instagram.com">
            <FaInstagram />
            </Link>
            <Link href="https://www.facebook.com">
            <FaFacebook />
            </Link>
            <Link href="https://www.youtube.com">
            <FaYoutube  />
            </Link>
            <Link href="https://twitter.com">
            <FaTwitter />
            </Link>
            </Flex>
      </Box> 
    </header>
    
  );
};

export default Header;

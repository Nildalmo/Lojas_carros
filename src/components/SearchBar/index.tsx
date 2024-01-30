import React from "react";
import { BiSearch } from "react-icons/bi";
import * as S from "./SearchBar.style";

const SearchBar = () => {
  return (
    <header>
      <S.Div>
        <form>
          <S.Input
            type="search"
            placeholder="Pesquisar...."
            className="search_input"
            required
          />
          <S.Button
            type="submit"
            className="botao-pesquisa"
            aria-label="Search"
          >
            <BiSearch />
          </S.Button>
        </form>
      </S.Div>
    </header>
  );
};

export default SearchBar;

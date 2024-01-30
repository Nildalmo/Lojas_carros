"use client";

import React, { useState } from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { Div } from "./validacao.style";

export function Login() {
  const [nome, setnome] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordconfirmation, setpasswordconfirmation] = useState("");
  return (
    <header>
      <Div className="Container">
        <header className="header">
          <img src="/logo.png" alt="" />
          <span>Cadastre-se</span>
        </header>
        <form>
          <div>
            <label htmlFor="nome">Nome: </label>
            <input
              type="nome"
              id="nome"
              placeholder="Seu Nome..."
              onChange={(event) => setnome(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="Seu email..."
              onChange={(event) => setemail(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password"> Senha: </label>
            <input
              type="password"
              id="password"
              placeholder="Sua senha..."
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="passwordconfirmation"> Confirme Senha: </label>
            <input
              type="passwordconfirmation"
              id="passwordconfirmation"
              placeholder="Sua senha..."
              onChange={(event) => setpasswordconfirmation(event.target.value)}
            />
          </div>

          <button type="submit">
            Entrar <BsArrowBarRight />
          </button>
        </form>
      </Div>
    </header>
  );
}

export default Login;

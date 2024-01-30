"use client";
import React, { useState } from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { Div } from "./forms.style";
import Link from "next/link";
import { login } from "@/login.service";

export function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlelogin = async () => {
    console.log("login");
    const response = await login({ email, password });
    console.log(response);
    window.location.href = "/";
  };
  return (
    <header>
      <Div className="Container">
        <header className="header">
          <img src="/logo.png" alt="" />
          <text>Por favor digite seu login para o seu acesso!</text>
        </header>
        <form>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="Seu email..."
              onChange={(event) => setemail(event.target.value)}
            />

            <label htmlFor="password"> Senha: </label>
            <input
              type="password"
              id="password"
              placeholder="Sua senha..."
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>

          <Link href="/forgotpassword">Esqueceu sua senha?</Link>
          <p></p>

          <Link href="/cadastro">Ainda não possui conta?</Link>
        </form>

        <button onClick={handlelogin} type="button">
          Entrar <BsArrowBarRight />
        </button>
      </Div>
    </header>
  );
}

export default Login;

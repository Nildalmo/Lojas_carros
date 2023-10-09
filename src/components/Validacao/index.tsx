"use client";
import * as S from "./validacao.style";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

export default function cadastro() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <S.Div className="Card">
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="nome">Digite seu nome: </S.Label>
        <S.Input id="nome" placeholder="Seu nome..." />
        <S.Label htmlFor="email">Email: </S.Label>
        <S.Input id="email" placeholder="Seu email..." />
        <S.Label htmlFor="password"> Senha: </S.Label>
        <S.Input type="password" id="password" placeholder="Sua senha..." />
        <S.Label htmlFor="password"> Confirme sua Senha: </S.Label>
        <S.Input type="password" id="password" placeholder="Sua senha..." />
        <S.Button type="submit">cadastrar</S.Button>
      </S.Form>
    </S.Div>
  );
}

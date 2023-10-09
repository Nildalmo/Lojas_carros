"use client";
import * as S from "./forms.style";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
     
    <S.Div className="Card">
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="email">Email: </S.Label>
        <S.Input id="email" placeholder="Seu email..." />
        <S.Label htmlFor="password"> Senha: </S.Label>
        <S. Input type="password" id="password" placeholder="Sua senha..." />
        <S.Button type="submit">Entrar</S.Button>
        <S.Small>
        <Link href="/cadastro">Ainda não possui conta?</Link>
        </S.Small>
      </S.Form>
    </S.Div>
     
  );
}

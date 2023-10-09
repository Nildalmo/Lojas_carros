"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import Cadastro from "@/components/Validacao";

export default function login() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return <Cadastro />;
}

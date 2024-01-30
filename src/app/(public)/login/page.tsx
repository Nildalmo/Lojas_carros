"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import Login from "@/components/Login";

export default function login() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return <Login />;
}

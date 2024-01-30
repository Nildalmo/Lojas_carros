import React from "react";
import { Div } from "./forgotpassword.style";

export function Forgotpassword() {
  return (
    <header>
      <header>
        <h2>Esqueceu a Sua Senha</h2>
      </header>
      <main>
        <div className="container">
          <form>
            <label htmlFor="email">Digite o seu E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Seu email..."
              required
            />
            <button type="submit">Enviar E-mail de Recuperação</button>
          </form>
        </div>
      </main>
    </header>
  );
}

export default Forgotpassword;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { createPortal } from "react-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-container">
      <h2 className="signup-title">S'inscrire</h2>
      <form className="form">
        <input
          type="text"
          value={username}
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="newsletter">
          <div className="newsletter-container">
            <input type="checkbox" className="newsletter-btn" />
            <p>S'inscrire à notre newsletter</p>
          </div>
          <div className="conditions">
            <p>
              En m'inscrivant, je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans
            </p>
          </div>
          <button>S'inscrire</button>
        </div>
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </form>
    </div>
  );
};

export default SignUp;

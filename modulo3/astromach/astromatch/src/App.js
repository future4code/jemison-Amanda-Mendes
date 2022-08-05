import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Profile from "./components/Profile/Profile";
import Matches from "./components/Matches/Matches";

const AppContainer = styled.div`
   box-sizing: border-box;
`;

const Btn = styled.button`
position: fixed;
    bottom: 5px;
    right: 5px;
`

export default function App() {
  const [tela, setTela] = useState("TelaProfile");

  const mudarTela = () => {
    switch (tela) {
      case "Profile":
        return <Profile proximaPagina={proximaPagina} paginaAnterior={paginaAnterior} resetar={zerarApp}/>
      case "Matches":
        return <Matches proximaPagina={proximaPagina} paginaAnterior={paginaAnterior}/>
      default:
        return <Profile></Profile>;
    }
  };
  const proximaPagina = () => {
    setTela("Matches");
  };

  const paginaAnterior = () => {
    setTela("Profile");
  };

  const zerarApp = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/graziela-queiroz-silveira/clear";

    try {
      const res = await axios.put(url, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res);
      alert("Sua lista foi reiniciada! Faça novamente");
    } catch (err) {
      alert("Erro! Desculpe, tente novamente.");
    }
  };

  return (
      <AppContainer>
        {mudarTela()}
        <Btn onClick={() => { zerarApp() }}>Limpar Matches</Btn>
      </AppContainer>
  );
}
import React, { Component } from "react";

import logo from "./logo.jpg";
import home from "./imagens/home.png";
import mensagem from "./imagens/mensagem.png";
import adicionar from "./imagens/adicionar.png";
import bussola from "./imagens/bussola.png";
import coracao from "./imagens/coracao.png";
import perfil from "./imagens/perfil.jpg";

function Header() {
  return (
    <>
      <header>
        <div className="header-border">
          <div className="container-header">
            <div>
              <img
                src={logo}
                className="logo"
                style={{ width: "60px", height: "50px" }}
              />
            </div>

            <div className="barra" style={{ marginBottom: "10px" }}>
              <input
                type="text"
                className="pesquisa"
                placeholder="Search"
              ></input>
            </div>

            <nav>
              <div className="links" style={{ marginBottom: "10px" }}>
                <img src={home} className="home" alt="home" />
                <img src={mensagem} className="mensagem" alt="mensagem" />
                <img src={adicionar} className="adicionar" alt="adicionar" />
                <img src={bussola} className="bussola" alt="bussola" />
                <img src={coracao} className="coracao" alt="coração" />
                <img src={perfil} className="perfil" alt="perfil" />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

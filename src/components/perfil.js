import React, { Component } from "react";

import perfil from "./imagens/perfil.jpg";
import perfil2 from "./imagens/perfil2.jpg";
import perfil3 from "./imagens/perfil3.jpg";
import perfil4 from "./imagens/perfil4.jpg";
import perfil5 from "./imagens/perfil5.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Perfil() {
  return (
    <>
      <div className="informacoes">
        <div className="container-informacoes">
          <div className="mudar-perfil">
            <div className="perfil-informacoes">
              <div>
                <img src={perfil} className="foto-informacoes" alt="perfil" />
                <div className="text-perfil">
                  <h1>John</h1>
                </div>
              </div>

              <div>
                <p className="mudar">+</p>
              </div>
            </div>
          </div>

          <div className="sugestoes">
            <div className="sugestoes-texto">
              <h1>Team Details</h1>
            </div>

            <div className="sugestoes-container">
              <div className="perfil-sugestoes">
                <div>
                  <img src={perfil} className="foto-sugestoes" alt="perfil" />
                  <div className="text-perfil2">
                    <h1>Ashwin</h1>
                    <p>Cityzen</p>
                  </div>
                </div>

                <div>
                  <p className="follow">follow</p>
                </div>
              </div>
            </div>

            <div className="sugestoes-container">
              <div className="perfil-sugestoes">
                <div>
                  <img src={perfil2} className="foto-sugestoes" alt="perfil" />
                  <div className="text-perfil2">
                    <h1>Nithya</h1>
                    <p>Part time farmer</p>
                  </div>
                </div>

                <div>
                  <p className="follow">follow</p>
                </div>
              </div>
            </div>

            <div className="sugestoes-container">
              <div className="perfil-sugestoes">
                <div>
                  <img src={perfil3} className="foto-sugestoes" alt="perfil" />
                  <div className="text-perfil2">
                    <h1>Sudeeksha</h1>
                    <p>data Storyteller</p>
                  </div>
                </div>

                <div>
                  <p className="follow">follow</p>
                </div>
              </div>
            </div>

            <div className="sugestoes-container">
              <div className="perfil-sugestoes">
                <div>
                  <img src={perfil5} className="foto-sugestoes" alt="perfil" />
                  <div className="text-perfil2">
                    <h1>JayKrith</h1>
                    <p>XOTWOD</p>
                  </div>
                </div>

                <div>
                  <p className="follow">follow</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer"></div>
        </div>
        <br></br>

        <div>
          <h4 style={{ paddingRight: "350px" }}>About Us</h4>
          <Card style={{ marginTop: "10px" }}>
            <CardContent>
              <p align="justify" style={{ color: "black" }}>
                {" "}
                Dark Room is an AI-driven product in social media and video
                streaming arenas with a mission to enable community and
                entertainment reach to the visually impaired sections of the
                population. Dark Room provides audio descriptions for posts and
                videos. We help visually impaired to stay connected, build
                relations, access information on world events and find
                opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Perfil;

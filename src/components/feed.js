import React, { Component } from "react";
import mensagem from "./imagens/mensagem.png";
import coracao from "./imagens/coracao.png";
import comenta from "./imagens/comentar.png";
import salva from "./imagens/salva.png";
import pontos from "./imagens/pontos.png";
import emoji from "./imagens/emoji.png";
import ReactPlayer from "react-player/youtube";
import imageToBase64 from "image-to-base64/browser";
import TextToSpeech from "./TextToSpeech";

import { useEffect, useRef, useState, useMemo } from "react";

function Feed(props) {
  const [baseCode, setBaseCode] = useState(" ");
  const [text, setText] = useState("");

  if (props.value == "image") {
    return (
      <>
        <div className="feed">
          <div className="foto1">
            <div className="infomacoes-perfil">
              <div className="perfil-feed">
                <div>
                  <div className="story-border-feed">
                    <img
                      src={props.perfil}
                      className="foto-perfil"
                      alt="perfil"
                    />
                  </div>
                  <div className="text-feed">
                    <h1>{props.nome}</h1>
                    <h2 className="localizacao">{props.localizacao}</h2>
                  </div>
                </div>

                <div>
                  <img src={pontos} className="pontos" alt="perfil" />
                </div>
              </div>
            </div>

            <img src={props.feed} className="foto-feed" alt="foto" />

            <div className="interacao">
              <div>
                <img src={coracao} className="coracao" alt="coração" />
                <img src={comenta} className="coracao" alt="coração" />
                <img src={mensagem} className="mensagem" alt="mensagem" />
              </div>

              <img src={salva} className="salva" alt="salva" />
            </div>

            <div className="informacoes-da-foto">
              <p>
                <spam>{props.curtidas}</spam>
              </p>
              <p>
                <spam>{props.nome}</spam>
                {props.titulo}
              </p>
              <p className="comentario">{props.comentarios}</p>
              <p className="horario">{props.horario}</p>
            </div>

            <div className="publicar-comentario">
              <img src={emoji} className="emoji" alt="emoji" />
              <input type="text" className="comentar" placeholder="Comment" />
              <TextToSpeech text={"hello I am Gunjur"} className="publicar">
                Audio
              </TextToSpeech>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="feed">
          <div className="foto1">
            <div className="infomacoes-perfil">
              <div className="perfil-feed">
                <div>
                  <div className="story-border-feed">
                    <img
                      src={props.perfil}
                      className="foto-perfil"
                      alt="perfil"
                    />
                  </div>
                  <div className="text-feed">
                    <h1>{props.nome}</h1>
                    <h2 className="localizacao">{props.localizacao}</h2>
                  </div>
                </div>

                <div>
                  <img src={pontos} className="pontos" alt="perfil" />
                </div>
              </div>
            </div>

            <ReactPlayer url={props.feed} width={"480px"} />

            <div className="interacao">
              <div>
                <img src={coracao} className="coracao" alt="coração" />
                <img src={comenta} className="coracao" alt="coração" />
                <img src={mensagem} className="mensagem" alt="mensagem" />
              </div>

              <img src={salva} className="salva" alt="salva" />
            </div>

            <div className="informacoes-da-foto">
              <p>
                <spam>{props.curtidas}</spam>
              </p>
              <p>
                <spam>{props.nome}</spam>
                {props.titulo}
              </p>
              <p className="comentario">{props.comentarios}</p>
              <p className="horario">{props.horario}</p>
            </div>

            <div className="publicar-comentario">
              <img src={emoji} className="emoji" alt="emoji" />
              <input type="text" className="comentar" placeholder="Comment" />
              <p className="publicar">Audio</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Feed;

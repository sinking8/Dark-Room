import "./App.css";
import Header from "./components/header";
import Story from "./components/story";
import Perfil from "./components/perfil";
import Feed from "./components/feed";
import perfil from "./components/imagens/perfil.jpg";
import perfil2 from "./components/imagens/perfil2.jpg";
import perfil3 from "./components/imagens/perfil3.jpg";
import perfil4 from "./components/imagens/perfil4.jpg";
import perfil5 from "./components/imagens/perfil5.jpg";
import feed from "./components/imagens/feed.jpg";
import feed2 from "./components/imagens/feed2.jpg";
import feed3 from "./components/imagens/feed3.jpg";
import feed4 from "./components/imagens/perfil4.jpg";
import feed5 from "./components/imagens/feed5.jpg";
import imageToBase64 from "image-to-base64/browser";
import { useEffect, useRef, useState, useMemo } from "react";
import axios from "axios";
function App() {
  const feeds = [feed, feed2, feed3, feed4, feed5];
  const EndRef = useRef(null);
  const [count, setCount] = useState(0);
  const [curr_y, setCurr_y] = useState(0);
  const [texts, setTexts] = useState([]);
  const synth = window.speechSynthesis;

  var inx = 690;
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      window.scrollTo(0, curr_y);
      imageToBase64(feeds[count])
        .then((response) => {
          axios
            .post("https://flask-production-4f4a.up.railway.app/get_text", {
              img_string: response,
            })
            .then((res) => {
              let text = res.data.data["text"];
              if (text != "") {
                const u = new SpeechSynthesisUtterance(text);
                synth.speak(u);
                return text;
              }
            });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally((text) => {
          setCurr_y(curr_y + inx);
          setCount(count + 1);
        });
    }, 5000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <Header />

      <div className="main">
        <div className="container">
          <Story />
          <Feed
            value="video"
            perfil={perfil}
            nome="user.name18"
            localizacao="Em Casa"
            feed="https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios"
            curtidas="154 curtidas"
            titulo="  beautiful picture"
            comentarios="3 comments"
            horario="Há 3 horas"
          />
          <Feed
            value="image"
            perfil={perfil2}
            nome="user.name2"
            localizacao="Restaurante Tudo gostoso"
            feed={feed2}
            curtidas="222 curtidas"
            titulo=" delicious 🤤"
            comentarios="3 comments"
            horario="Há 2 horas"
          />
          <Feed
            value="image"
            perfil={perfil3}
            nome="user.name5"
            localizacao="Netflix"
            feed={feed3}
            curtidas="30 curtidas"
            titulo=" HAHAHAHAH"
            comentarios="2 comments"
            horario="Há 18 minutos"
          />
          <Feed
            value="image"
            perfil={perfil4}
            nome="user.name3"
            localizacao="Descobre ai bb"
            feed={feed4}
            curtidas="491 curtidas"
            titulo=" 🔥"
            comentarios="Ver todos os 543 comentários"
            horario=""
          />
          <Feed
            value="image"
            perfil={perfil5}
            nome="user.name32"
            localizacao="Twitter"
            feed={feed5}
            curtidas="15.249.184 curtidas"
            titulo="  ........"
            comentarios="Ver todos os 23 mil comentários"
            horario="Há 19 horas"
          />
          <Perfil />
        </div>
        <div ref={EndRef}></div>
      </div>
    </>
  );
}

export default App;

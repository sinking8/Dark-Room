import './App.css'; 
import Header from './components/header';
import Story from './components/story';
import Perfil from './components/perfil';
import Feed from './components/feed';
import perfil from './components/imagens/perfil.jpg';
import perfil2 from './components/imagens/perfil2.jpg';
import perfil3 from './components/imagens/perfil3.jpg';
import perfil4 from './components/imagens/perfil4.jpg';
import perfil5 from './components/imagens/perfil5.jpg';
import feed from './components/imagens/feed.jpg';
import feed2 from './components/imagens/feed2.jpg';
import feed3 from './components/imagens/feed3.jpg';
import feed4 from './components/imagens/perfil4.jpg';
import feed5 from './components/imagens/feed5.jpg';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Story />

          <Feed value="video" perfil={perfil} nome="user.name18" localizacao="Em Casa" feed="https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios" curtidas="154 curtidas" titulo="  beautiful picture" comentarios="3 comments"   horario="Há 3 horas"  />
          <Feed value="image" perfil={perfil2} nome="user.name2" localizacao="Restaurante Tudo gostoso" feed={feed2} curtidas="222 curtidas" titulo=" delicious 🤤" comentarios="3 comments"   horario="Há 2 horas"  />
          <Feed value="image" perfil={perfil3} nome="user.name5" localizacao="Netflix" feed={feed3} curtidas="30 curtidas" titulo=" HAHAHAHAH" comentarios="2 comments"   horario="Há 18 minutos"  />
          <Feed value="image" perfil={perfil4} nome="user.name3" localizacao="Descobre ai bb" feed={feed4} curtidas="491 curtidas" titulo=" 🔥" comentarios="Ver todos os 543 comentários"   horario=""  />
          <Feed value="image" perfil={perfil5} nome="user.name32" localizacao="Twitter" feed={feed5} curtidas="15.249.184 curtidas" titulo="  ........" comentarios="Ver todos os 23 mil comentários"   horario="Há 19 horas"  />

          <Perfil />        
        </div>
      </div>
    </>
  );
}

export default App;

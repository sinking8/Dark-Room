import mensagem from './imagens/mensagem.png';
import coracao from './imagens/coracao.png';
import comenta from './imagens/comentar.png';
import salva from './imagens/salva.png';
import pontos from './imagens/pontos.png';
import emoji from './imagens/emoji.png';
import ReactPlayer from 'react-player/youtube'
import imageToBase64 from 'image-to-base64/browser';
import TextToSpeech from './TextToSpeech';


function Feed(props) {
    fetch("https://flask-production-4f4a.up.railway.app/get_text", {
        headers: {
          "Content-Type": "application/json",
        },
        mode: 'no-cors',
        method: "POST",
        body: JSON.stringify( {
          img_string: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
        })
      }).then((res) => {
        console.log(res);
      });
    if(props.value == "image"){
        return (
            <>
               <div className="feed">
                    <div className="foto1">
                        <div className="infomacoes-perfil">
                            <div className="perfil-feed">
                                <div>
                                    <div className="story-border-feed"><img src={props.perfil} className="foto-perfil" alt="perfil" /></div>    
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
                            <p><spam>{props.curtidas}</spam></p>
                            <p><spam>{props.nome}</spam>{props.titulo}</p>
                            <p className="comentario">{props.comentarios}</p>
                            <p className="horario">{props.horario}</p> 
                        </div>                
        
                        <div className="publicar-comentario">
                            <img src={emoji} className="emoji" alt="emoji" />
                            <input type="text" className="comentar" placeholder="Comment" />
                            <TextToSpeech text={"hello I am Gunjur"} className="publicar">Audio</TextToSpeech>
                        </div>
                    </div>
              </div>        
            </>
          );
        
        
    } else 
    {
        return (
            <>


<div className="feed">
                    <div className="foto1">
                        <div className="infomacoes-perfil">
                            <div className="perfil-feed">
                                <div>
                                    <div className="story-border-feed"><img src={props.perfil} className="foto-perfil" alt="perfil" /></div>    
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
        
                        <ReactPlayer url={props.feed} width={'480px'} />
                        
                        <div className="interacao">  
                            <div>
                                <img src={coracao} className="coracao" alt="coração" />
                                <img src={comenta} className="coracao" alt="coração" />
                                <img src={mensagem} className="mensagem" alt="mensagem" />
                            </div>                  
                            
                            <img src={salva} className="salva" alt="salva" />
                        </div>
        
                        <div className="informacoes-da-foto">
                            <p><spam>{props.curtidas}</spam></p>
                            <p><spam>{props.nome}</spam>{props.titulo}</p>
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




        )
    }
}
  
export default Feed;
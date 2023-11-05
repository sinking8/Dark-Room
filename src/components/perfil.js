import perfil from './imagens/perfil.jpg';
import perfil2 from './imagens/perfil2.jpg';
import perfil3 from './imagens/perfil3.jpg';
import perfil4 from './imagens/perfil4.jpg';
import perfil5 from './imagens/perfil5.jpg';

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
                                <p>John</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="mudar">+</p>
                        </div>                            
                    </div>                          
                </div>

                <div className="sugestoes">
                    <div className="sugestoes-texto">
                            <h1>Suggestions</h1>
                    </div>

                    <div className="sugestoes-container">
                        <div className="perfil-sugestoes">
                            <div>
                                <img src={perfil} className="foto-sugestoes" alt="perfil" />
                                <div className="text-perfil2">
                                    <h1>emily</h1>
                                    <p>user name</p>
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
                                    <h1>jacob</h1>
                                    <p>user name2</p>
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
                                    <h1>Ashwin</h1>
                                    <p>user name2</p>
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
                                    <h1>Ashwin</h1>
                                    <p>user name2</p>
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
                                <img src={perfil4} className="foto-sugestoes" alt="perfil" />
                                <div className="text-perfil2">
                                    <h1>JK</h1>
                                    <p>user name2</p>
                                </div>
                            </div>
                            
                            <div>
                                <p className="follow">follow</p>
                            </div>                            
                        </div>  
                    </div>
                </div>

                <div className="footer">
                </div>
            </div>
      </div>
    </>
  );
}

export default Perfil;
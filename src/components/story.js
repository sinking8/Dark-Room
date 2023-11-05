import perfil from './imagens/perfil.jpg';
import perfil2 from './imagens/perfil2.jpg';
import perfil3 from './imagens/perfil3.jpg';
import perfil4 from './imagens/perfil4.jpg';
import perfil5 from './imagens/perfil5.jpg';
import perfil6 from './imagens/perfil6.jpg';
import perfil7 from './imagens/perfil7.jpg';
import perfil8 from './imagens/perfil8.jpg';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import { useRef, useState } from 'react'

function Story() {
    const storiesRef = useRef(null)
    const [showleft, setShowleft] = useState(false)
    const [showright, setShowright] = useState(true)
  
    const onScroll = () => {
      if (
        storiesRef.current.scrollLeft ===
        storiesRef.current.scrollWidth - storiesRef.current.clientWidth
      ) {
        setShowright(false)
      } else {
        setShowright(true)
      }
      if (storiesRef.current.scrollLeft > 0) {
        setShowleft(true)
      } else {
        setShowleft(false)
      }
    }
  return (
    <>
       <div className="story">
          <div className="story-container" onScroll={onScroll} ref={storiesRef}>     
                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>John</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil2} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>ashwin</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil3} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>Nithya</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil4} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>JK</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil5} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>Sudeeksha</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil6} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name22</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil7} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name98</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil8} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name0</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name18</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil2} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name2</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil3} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name5</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil4} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name3</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil5} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name32</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil6} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name22</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil7} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name98</h1>
                </div>

                <div className="perfil-story">
                    <div className="story-border">
                        <img src={perfil8} className="foto-story" alt="perfil" />
                    </div>  
                    <h1>user.name0</h1>
                </div>
                <div className="buttons">
                <button onClick={ ()=>{
                            storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 600
                        }}>
                        <BiChevronLeft className={`button-left ${showleft ? "visible" : "invisible"} `}/>
                    </button>
                    <button onClick={ ()=>{
                            storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 600
                        }}>
                        <BiChevronRight className={`button-right ${showright ? "visible" : "invisible"} `}/>
                    </button>
              </div>
            </div>
        </div>
    </>
  );
}

export default Story; 
import './Filme.css'
import Imagem from "..//img/barbie.png"


function Filme(){
    return(
        <div className="filme-content">
            {/* o comentario aqui é desse jeito, dentro das
            chaves vc pode usar js, por isso da pra importar
            o "imagem" dentro do componente IMG */}
            <img src={Imagem} alt=""></img>

            <div className="text-barbie">
                <h1>Barbie</h1>
                <p className="sinopse">Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.</p>
            </div>

        </div>
    )
}

export default Filme
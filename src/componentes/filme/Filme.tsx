//import imagem from "..//img/barbie.png"
import './Filme.css'
type FilmeProps = {
    titulo: string,
    sinopse:string,
    imagem:string

}

function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            {/* o comentario aqui é desse jeito, dentro das
            chaves vc pode usar js, por isso da pra importar
            o "imagem" dentro do componente IMG */}
           <div className="foto_filme">
                <img className="img-filme" src={props.imagem} alt=""></img>
           </div> 

            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>

        </div>
    )
}

export default Filme
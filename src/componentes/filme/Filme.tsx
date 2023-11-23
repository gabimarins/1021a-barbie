//import imagem from "..//img/barbie.png"
import './Filme.css'
type FilmeProps = {
    titulo: string,
    descricao:string,
    foto:string

}

function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            {/* o comentario aqui é desse jeito, dentro das
            chaves vc pode usar js, por isso da pra importar
            o "imagem" dentro do componente IMG */}
           <div className="foto_filme">
                <img className="img-filme" src={props.foto} alt=""></img>
           </div> 

            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="descricao">{props.descricao}</p>
            </div>

        </div>
    )
}

export default Filme
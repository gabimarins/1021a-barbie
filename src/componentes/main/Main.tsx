import { useEffect, useState } from 'react';
import Filme from './../filme/Filme'
import './Main.css'
import axios from 'axios';
import lupa from '../img/lupa.png';

type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

const URL_API = "http://localhost:3000/filmes";

export default function Main() {
    const [texto, setTexto] = useState("");
    const [filmes, setFilmes] = useState<FilmeType[]>([]);
    
    useEffect(() => {
       const fetchData  = async () => {
              try {
                     const resposta = await axios.get<FilmeType[]>(URL_API);
                     setFilmes(resposta.data);
              }
              catch(error){
                     console.log('Erro ao buscar dados:', error);
              }
       };

    fetchData ();
}, []);

function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
    setTexto(e.target.value)
}

  
return (
    <>
       <div className="campopesquisa">
               <div id="divBusca">

       <input type="text" className="botao_pesquisa" placeholder="Encontre o filme desejado..." onChange={TrataTexto}/>
       <button className="divBusca"><img src={lupa}></img></button>

            {(texto)?<p>Resultados para: {texto}</p>:""}
                
        </div></div>

        <main className="content-main">
        {
             filmes
             .filter((filme) =>
               filme.titulo.replace(/\s/g, '').toLowerCase().includes(texto.replace(/\s/g, '').toLowerCase())
             )
              
              
              .map((filme)=>
                     <Filme 
                                key={filme.id} sinopse={filme.sinopse} titulo={filme.titulo} imagem={filme.imagem}
                     />
              )
       }
        </main>

    </>
  );
}
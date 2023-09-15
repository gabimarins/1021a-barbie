import { useState } from 'react'

import Filme from './../filme/Filme'
import './Main.css'
import lupa from '../img/lupa.png';

type FilmeType = {
       id:number,
       titulo:string,
       sinopse:string,
       imagem:string
}

export default function Main() {
    const [texto, setTexto]=useState("")

    const filmes:FilmeType[] = [
       {
              id: 1,
              titulo:'Barbie Live Action',
              sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
              imagem: "/barbie.png"
       },
       {
              id: 2,
              titulo:'Barbie: o Quebra-Nozes',
              sinopse:"Clara ganha um lindo soldadinho de madeira de sua tia favorita. Na mesma noite, o soldado ganha vida para protege-la do Rato Rei, que invade sua sala. Ela acorda e ajuda o Quebra-Nozes, mas o Rato Rei a encolhe com uma terrível magia. Então, os dois se envolvem em uma espetacular aventura pera encontrar a Princesa Caramelo, a única que pode quebrar o diabólico feitiço.",
              imagem: "/quebranozes.webp"
       },
       {
              id: 3,
              titulo:'Barbie e o Lago dos Cisnes',
              sinopse:"O filme traz Barbie como Odette, a jovem filha do padeiro que segue um unicórnio até a Floresta Encantada. O malvado feiticeiro Rodrigo, que pretende derrotar sua prima a Fada e tomar a Floresta, transforma Odette em cisne. A Fada Rainha consegue amenizar o feitiço fazendo com que Odette seja humana à noite e cisne de dia. Odette percebe que, mesmo que sinta ser a pessoa errada para a tarefa, é seu destino salvar a Floresta Encantada. Mas como pode uma garota armada apenas de sua coragem, honestidade e inteligência conseguir isso, tudo enquanto o belo Príncipe Daniel se apaixona por ela?",
              imagem: "/lagodoscisnes.jpg"
       },
       {
              id: 4,
              titulo:'Barbie e a Princesa Plebeia',
              sinopse:"Uma plebeia, moradora de um vilarejo, é muito parecida com a princesa do reino. Os destinos das duas se cruzam quando a princesa é sequestrada, e a moça humilde usa sua incrível semelhança com ela para tentar salvar das mãos do vilão.ta Encantada. Mas como pode uma garota armada apenas de sua coragem, honestidade e inteligência conseguir isso, tudo enquanto o belo Príncipe Daniel se apaixona por ela?",
              imagem: "/princesaplebeia.webp"
       },
       {
              id: 5,
              titulo:'Barbie and the Magic of Pegasus',
              sinopse:"Ao completar 17 anos, a princesa Anika é pedida em casamento por um bruxo malvado e, diante de sua recusa, ele transforma os pais da moça e todos os súditos do reino em estátuas de gelo. Um cavalo alado aparece para ajudá-la a quebrar o feitiço.",
              imagem: "/magic.png"
       },
       {
              id: 6,
              titulo:'O diário da Barbie',
              sinopse:"Barbie se apaixona pelo craque do time, Todd, mas ele e Raquel, a garota mais popular do colégio, reatam o namoro. Barbie usa a pulseira que vem com seu diário e sua sorte muda. Ela inscreve sua banda no festival do baile e ganha admirador secreto.",
              imagem: "/diario.jpg"
       },
       {
              id: 7,
              titulo:'Barbie e as Doze Princesas Bailarinas',
              sinopse:"Genevieve e suas irmãs adoram dançar. Como são impedidas pela Duquesa Rowena, as princesas bailarinas descobrem um mundo mágico onde dançam sem serem incomodadas. Porém, acontecimentos mais urgentes as levam a tentar salvar a vida do pai.",
              imagem: "/dozeprincesas.png"
       }
    ]
    
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
       setTexto(e.target.value)
    }

    return(
<>
        {
              <div className="campopesquisa"> 
                     <div id="divBusca">
                            <input type="text" className="botao_pesquisa" placeholder="Encontre o filme desejado..." onChange={TrataTexto}/>
                            <button className="divBusca"><img src={lupa}></img></button>
                    </div>
                    {(texto)?<p>Resultados para: {texto}</p>:""}
              </div>
       }
       
        <main className="content-main">
                     {filmes
                     .filter((filme) => {
                     const textoSemEspacos = texto.replace(/\s/g, ''); // Remove espaços em branco do texto
                     const tituloSemEspacos = filme.titulo.replace(/\s/g, ''); // Remove espaços em branco do título do filme
                     const sinopseSemEspacos = filme.sinopse.replace(/\s/g, ''); // Remove espaços em branco da sinopse do filme
                     const tudo = tituloSemEspacos.toLowerCase().includes(textoSemEspacos.toLowerCase());
                     const tudo2 = sinopseSemEspacos.toLowerCase().includes(textoSemEspacos.toLowerCase());
                     const tudo3 = tudo || tudo2; // Use '||' (ou) para permitir que qualquer uma das condições seja verdadeira
                     return tudo3;
                     })
                     .map((filme) => (
                     <Filme key={filme.id} titulo={filme.titulo} sinopse={filme.sinopse} imagem={filme.imagem} />
                     ))}
          
        </main>

        </>
    )
}
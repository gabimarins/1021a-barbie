import Filme from './../filme/Filme'
import './Main.css'
import lupa from '..//img/lupa.png';

export default function Main(){
    return(
<>
        {
       <div className="campopesquisa"> 
              <div id="divBusca">
                     <input type="text" id="txtBusca" placeholder="Encontre o filme desejado..."/>
                     <button className="divBusca"><img src={lupa}></img></button>
              </div>
      </div>
       }
       

        <main className="content-main">
            <Filme titulo="Barbie Live Action" 
                    sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, 
                    Barbie parte para o mundo humano em busca da verdadeira felicidade."
                    imagem= "/barbie.png"/>
             <Filme titulo="Barbie: o Quebra-Nozes" 
                    sinopse="Clara ganha um lindo soldadinho de madeira de sua tia favorita. Na mesma noite, o soldado 
                    ganha vida para protege-la do Rato Rei, que invade sua sala. Ela acorda e ajuda o Quebra-Nozes, mas 
                    o Rato Rei a encolhe com uma terrível magia. Então, os dois se envolvem em uma espetacular aventura 
                    pera encontrar a Princesa Caramelo, a única que pode quebrar o diabólico feitiço. 2001"
                    imagem= "/quebranozes.webp"/>
             <Filme titulo="Barbie como Rapunzel" 
                    sinopse="A boneca Barbie vive Rapunzel, uma jovem de longos e lindos cabelos que é mantida prisioneira 
                    na torre de um castelo pela poderosa bruxa Gothel. A descoberta de um pincel mágico trará grandes 
                    revelações para a heroína e mudará seu destino."
                    imagem= "/rapunzel.webp"/>
             <Filme titulo="Barbie e o Lago dos Cisnes" 
                    sinopse="Baseado na música de Tchaikovsky e no adorado conto de fadas, o filme traz Barbie como Odette, 
                    a jovem filha do padeiro que segue um unicórnio até a Floresta Encantada. O malvado feiticeiro Rodrigo,
                que pretende derrotar sua prima a Fada e tomar a Floresta, transforma Odette em cisne. 
                    A Fada Rainha consegue amenizar o feitiço fazendo com que Odette seja humana à noite e cisne de dia. 
                    Odette percebe que, mesmo que sinta ser a pessoa errada para a tarefa, é seu destino salvar a Floresta Encantada. 
                    Mas como pode uma garota armada apenas de sua coragem, honestidade e inteligência conseguir isso, tudo enquanto o belo Príncipe Daniel se apaixona por ela?"
                    imagem= "/lagodoscisnes.jpg"/>
             <Filme titulo="Barbie e a Princesa Plebeia" 
                    sinopse="Uma plebeia, moradora de um vilarejo, é muito parecida com a princesa do reino. Os destinos 
                    das duas se cruzam quando a princesa é sequestrada, e a moça humilde usa sua incrível semelhança 
                    com ela para tentar salvar das mãos do vilão."
                    imagem= "/princesaplebeia.webp"/>
             <Filme titulo="Filme Barbie" 
                    sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, 
                    Barbie parte para o mundo humano em busca da verdadeira felicidade."
                    imagem= "/barbie.png"/>
             <Filme titulo="Filme Barbie" 
                    sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, 
                    Barbie parte para o mundo humano em busca da verdadeira felicidade."
                    imagem= "/barbie.png"/>
             <Filme titulo="Filme Barbie" 
                    sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, 
                    Barbie parte para o mundo humano em busca da verdadeira felicidade."
                    imagem= "/barbie.png"/>
        </main>

        </>
    )
}
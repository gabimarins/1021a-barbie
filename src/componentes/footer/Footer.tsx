import './Footer.css';
import barbielogo from '..//img/Barbie_Logo.svg.png';
import discord from '..//img/discord.png';
import instagram from '..//img/instagram.png';
import twitter from '..//img/twitter.png';
import facebook from '..//img/facebook.png';
import youtube from '..//img/youtube.png';

export function Footer(){
    return(
        <footer className="rodape">

<div className="conteudorodape">
<div className="sessao1">
            <div className="blocoinicial">
                <img className="logo" src={barbielogo} alt="Logo da Barbie"></img>
                <div className="divtexto"><p>Descubra uma ampla seleção de brinquedos e conteúdos da Barbie. Compre todas as bonecas Barbie, conjuntos, casas de bonecas e muito mais hoje!</p></div>
                <div className="redessociais">
                    <img src={discord} alt="discord"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={youtube} alt="youtube"/>
                </div>
            </div>

            <div className="bloco2 bloco">
                <h1>Conteúdos da Barbie</h1>
                <a href="#">Live Action</a>
                <a href="#">Desenhos</a>
                <a href="#">Material escolar</a>
                <a href="#">Moda</a>
                <a href="#">Extras</a>
            </div>

            <div className="bloco3 bloco">
                <h1>Companhia</h1>
                <a href="#">Contate-nos</a>
                <a href="#">Parcerias</a>
                <a href="#">Para investidores</a>
                <a href="#">Sobre nós</a>
                <a href="#">Saiba mais</a>
            </div>

            <div className="bloco4 bloco">
                <h1>Ajuda</h1>
                <a href="#">Blog</a>
                <a href="#">Central de ajudas</a>
                <a href="#">Roadmap</a>
            </div>

            <div className="bloco5 bloco">
                <h1>Comunidade</h1>
                <a href="#">Cookies e Tecnologia</a>
                <a href="#">Declaração de Acessibilidade</a>
                <a href="#">Cookie Preferences</a>
            </div>
     </div>

<div className="bloco6">
            <div className="blocofinal">
                <div className="direitos"><a>© 2023 Barbie</a></div>
                <div className="propriedadesfinais"><a>Termos de serviço</a>
                <a>Política de privacidade</a>
                <a className="linha">|</a>
                <a>◍ Português ∇</a>
            </div>
            </div> 
            </div>
</div>
        </footer>
    )
}

export default Footer
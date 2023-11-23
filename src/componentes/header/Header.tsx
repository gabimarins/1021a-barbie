import './Header.css'
import LinkNav from '../linknav/LinkNav'
import barbielogo from '..//img/Barbie_Logo.svg.png';

function Header(){
    return(
        <header>
            <div>
            <img className="logoheader" src={barbielogo} alt="Logo da Barbie"></img>
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url="/noticias" texto='Notícia'/>
                    </li>
                    <li>
                        <LinkNav url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
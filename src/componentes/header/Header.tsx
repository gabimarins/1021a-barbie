import './Header.css'
import Link from './../link/Link'
import barbielogo from '..//img/Barbie_Logo.svg.png';

function Header(){
    return(
        <header>
            <div className="fotobarbie">
            <img className="logo" src={barbielogo} alt="Logo da Barbie"></img>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
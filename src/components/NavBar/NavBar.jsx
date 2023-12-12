import CartWidget from "./CartWidget"
import './NavBar.css'
const NavBar = () => {

    return (
        <div id="brand">
            <h1>Libroteca</h1>
            <ul>
                <li>
                    <a href="">Acción</a>
                </li>
                <li>
                    <a href="">Ciencia Ficción</a>
                </li>
                <li>
                    <a href="">Drama</a>
                </li>
                <li>
                    <a href="">Fantasía</a>
                </li>
                <li>
                    <a href="">Lectura Infantil</a>
                </li>
                <li>
                    <a href="">Manga</a>
                </li>
                <li>
                    <a href="">Novela</a>
                </li>
                <li>
                    <a href="">Romance</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar
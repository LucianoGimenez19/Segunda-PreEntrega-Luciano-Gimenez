import "./styles.scss";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import logo from "../../logo.png"





function NavBar() {
    return (
        <div className="nav">
            <div className="container">
                <header>
                    <div className="container-logo">
                        <Link to="/"><img className="logo" src={logo} /></Link>
                    </div>
                    <ul className="menu">
                        <li >
                            <Link className="menu-botones" to="/">Menú</Link>
                        </li>
                        <li >
                            <Link className="menu-botones" to="/category/dobles">Dobles</Link>
                        </li>
                        <li>
                            <Link className="menu-botones" to="/category/triples">Triples</Link>
                        </li>
                        <li className="carrito">
                            <CartWidget />
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    )
}


export default NavBar;

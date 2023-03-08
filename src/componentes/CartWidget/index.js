import { BsFillCartCheckFill } from 'react-icons/bs';
import "./styles.scss"
import { Link } from 'react-router-dom';


function CartWidget() {
    return (
        <div>
            <Link to="/">
                <BsFillCartCheckFill className="carrito" />
                <span className='numero-carrito'>3</span>
            </Link>
        </div>
    )
};

export default CartWidget;
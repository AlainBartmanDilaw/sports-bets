import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from "../images/SportsBalls.jpg";

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo">
                    <img src={logo} width={80} height={50} />
                    {/*Logo*/}
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;

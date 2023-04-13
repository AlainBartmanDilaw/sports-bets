import Navbar from './Navbar';
import logo from "../images/SportsBalls.jpg";

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <a href="/" className="logo">
                    <img src={logo} width={80} height={50} />
                    {/*Logo*/}
                </a>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;

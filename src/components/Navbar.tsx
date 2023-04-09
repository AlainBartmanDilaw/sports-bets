import IMenuItem from "../IMenuItem";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu: IMenuItem, index: number) => {
                    return <MenuItems item={menu} key={index} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;

import IMenuItem from "../IMenuItem";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu: IMenuItem, index: number) => {
                    const depthLevel = 0;
                    return <MenuItems item={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;

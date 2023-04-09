import { useState } from "react";

import IMenuItem from '../IMenuItem';
import Dropdown from './Dropdown';

type ItemProps = {
    item: IMenuItem;
}
const MenuItems: React.FC<ItemProps> = ({ item }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className="menu-items">
            {item.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                    >
                        {item.title}{' '}
                    </button>
                    <Dropdown submenus={item.submenu}
                              dropdown={dropdown}
                    />
                </>
            ) : (
                <a href={item.url}>{item.title}</a>
            )}
        </li>
    );
};

export default MenuItems;


import React, { useEffect, useRef, useState } from "react";

import IMenuItem from '../IMenuItem';
import Dropdown from './Dropdown';

type ItemProps = {
    item: IMenuItem;
    depthLevel: number;
}
const MenuItems: React.FC<ItemProps> = ({item, depthLevel}) => {
    const [ dropdown, setDropdown ] = useState(false);
    let ref: React.MutableRefObject<any> = useRef();
    useEffect(() => {
        const handler = (event: Event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [ dropdown ]);
    return (
        <li className="menu-items" ref={ref}>
            {item.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                    >
                        {item.title}{" "}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow"/>}
                    </button>
                    <Dropdown submenus={item.submenu}
                              dropdown={dropdown}
                              depthLevel={depthLevel}
                    />
                </>
            ) : (
                <a href={item.url}>{item.title}</a>
            )}
        </li>
    );
};

export default MenuItems;


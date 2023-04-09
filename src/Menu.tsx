import React from 'react';
import './Menu.css';
interface MenuItem {
    title: string;
    url?: string;
    children?: MenuItem[];
}

interface Props {
    menuItems: MenuItem[];
}

const Menu: React.FC<Props> = ({ menuItems }) => {
    return (
        <ul className="menu">
            {menuItems.map((menuItem, index) => (
                <li key={index}>
                    <a href={menuItem.url}>{menuItem.title}</a>
                    {menuItem.children && (
                        <ul>
                            {menuItem.children.map((childItem, childIndex) => (
                                <li key={childIndex}>
                                    <a href={childItem.url}>{childItem.title}</a>
                                    {childItem.children && (
                                        <ul>
                                            {childItem.children.map((grandchildItem, grandchildIndex) => (
                                                <li key={grandchildIndex}>
                                                    <a href={grandchildItem.url}>{grandchildItem.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Menu;

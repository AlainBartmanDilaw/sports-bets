import React from 'react';

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
                    {menuItem.children && <Menu menuItems={menuItem.children} />}
                </li>
            ))}
        </ul>
    );
};

export default Menu;

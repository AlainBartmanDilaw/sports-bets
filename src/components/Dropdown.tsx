import IMenuItem from "../IMenuItem";

// Define your component props
type SubItemProps = {
    submenus: IMenuItem[];
    dropdown: boolean;
}
const Dropdown: React.FC<SubItemProps> = ({submenus, dropdown}) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu: IMenuItem, index: number) => (
                <li key={index} className="menu-items">
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;

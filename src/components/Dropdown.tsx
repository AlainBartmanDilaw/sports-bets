import IMenuItem from "../IMenuItem";
import MenuItems from './MenuItems';

// Define your component props
type SubItemProps = {
    submenus: IMenuItem[];
    dropdown: boolean;
    depthLevel: number;
}
const Dropdown: React.FC<SubItemProps> = ({submenus, dropdown, depthLevel}) => {
    depthLevel += 1;
    const dropdownClass: string = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu: IMenuItem, index: number) => (
                <MenuItems item={submenu} key={index}
                           depthLevel={depthLevel}/>
            ))}
        </ul>
    );
};

export default Dropdown;

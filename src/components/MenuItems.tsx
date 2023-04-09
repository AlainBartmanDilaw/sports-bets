import IMenuItem from '../IMenuItem';
import Dropdown from './Dropdown';

type ItemProps = {
    item: IMenuItem;
}
const MenuItems: React.FC<ItemProps> = ({ item }) => {
    return (
        <li className="menu-items">
            {item.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu">
                        {item.title}{' '}
                    </button>
                    <Dropdown submenus={item.submenu} />
                </>
            ) : (
                <a href={item.url}>{item.title}</a>
            )}
        </li>
    );
};

export default MenuItems;

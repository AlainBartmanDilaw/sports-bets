import { HomeOutlined, RadarChartOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Content, Header } from 'antd/lib/layout/layout';
import { Accounts } from 'components/Pages/Accounts';
import { Exploitation } from 'components/Pages/Exploitation';
import { Homepage } from 'components/Pages/Homepage';
import { Settings } from 'components/Pages/Settings';
import React, { useEffect, useState } from 'react';
import { headerStyle, iconStyle, menuStyle } from '../Styles';
import ThemeProvider from './ThemeProvider';


const Page = {
    Home: 'HomePage',
    Accounts: 'Accounts',
    Settings: 'Settings',
    Exploitation: 'Exploitation',
    AccountCreate: 'AccountCreate',
}


const App = () => {

    interface IMenuItem {
        key: string;
        label: string;
        icon: JSX.Element;
        link?: JSX.Element;
        children?: Array<IMenuItem>,
    }

    const menuItems: Array<IMenuItem> = [
        {
            key: Page.Home,
            label: Page.Home,
            icon: <HomeOutlined style={iconStyle}/>,
            link: <Homepage/>,
        },
        {
            key: Page.Accounts,
            label: Page.Accounts,
            icon: <UserOutlined style={iconStyle}/>,
            // link: <></>,
            children: [
                {
                    key: Page.AccountCreate,
                    label: Page.AccountCreate,
                    icon: <UserOutlined style={iconStyle}/>,
                    link: <Accounts/>,
                },
            ]
        },
        {
            key: Page.Settings,
            label: Page.Settings,
            icon: <SettingOutlined style={iconStyle}/>,
            link: <Settings/>,
        },
        {
            key: Page.Exploitation,
            label: Page.Exploitation,
            icon: <RadarChartOutlined style={iconStyle}/>,
            link: <Exploitation/>,
        }

    ];

    const [ windowSize, setWindowSize ] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([ window.innerWidth, window.innerHeight ]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function displayActivePage(): JSX.Element {
        return activePage.link ? activePage.link : <></>;
    }

    const [ activePage, setActivePage ] = useState(menuItems[0]);

    const onClick: MenuProps['onClick'] = (e: MenuItemType) => {
        const findMenuItemByKey = (key: string | number, items: IMenuItem[]): IMenuItem | undefined => {
            for (const item of items) {
                if (item.key === key) {
                    return item;
                }
                if (item.children) {
                    const found = findMenuItemByKey(key, item.children);
                    if (found) {
                        return found;
                        break;
                    }
                }
            }
            return undefined;
        };

        const val = findMenuItemByKey(e.key, menuItems);
        setActivePage(val ? val : menuItems[0]);
    };

    return (

        <ThemeProvider>
            <Layout>
                <Header style={headerStyle}>
                    <Menu mode="horizontal" items={menuItems} style={menuStyle} onClick={onClick}/>
                </Header>
                <Content style={{padding: "0px", margin: "0 15px 0 15px"}}>
                    {displayActivePage()}
                </Content>

            </Layout>
        </ThemeProvider>
    );
};

export default App;

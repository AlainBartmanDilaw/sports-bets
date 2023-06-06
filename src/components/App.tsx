import { HomeOutlined, RadarChartOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Content, Header } from 'antd/lib/layout/layout';
import { Homepage } from 'components/Pages/Homepage';
import React, { useEffect, useState } from 'react';
import { Accounts } from 'components/Pages/Accounts';
import { Exploitation } from 'components/Pages/Exploitation';
import { Settings } from 'components/Pages/Settings';
import { headerStyle, iconStyle, menuStyle } from '../Styles';
import ThemeProvider from './ThemeProvider';


const Page = {
    Home: 'HomePage',
    Accounts: 'Accounts',
    Settings: 'Settings',
    Exploitation: 'Exploitation',
}


const App = () => {

    interface IMenuItem {
        key: string;
        label: string;
        icon: JSX.Element;
        link: JSX.Element;
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
            link: <Accounts/>,
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
        return activePage.link;
    }

    const [ activePage, setActivePage ] = useState(menuItems[0]);
    const onClick: MenuProps['onClick'] = (e: MenuItemType) => {
        console.log('click ', e);
        const val = menuItems.find((item: IMenuItem) => item.key === e.key);
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

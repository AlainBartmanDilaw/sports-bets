import IMenuItem from "./IMenuItem";

export const menuItems: IMenuItem[] = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'web design',
                url: 'web-design',
            },
            {
                title: 'web development',
                url: 'web-dev',
            },
            {
                title: 'SEO',
                url: 'seo',
            },
        ],
    },
    {
        title: 'About',
        url: '/about',
    },
];

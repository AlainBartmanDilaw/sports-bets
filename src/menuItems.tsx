import IMenuItem from './IMenuItem';

export const K_About: string = "/about"
export const K_WebDesign: string = 'web-design';
export const K_SEO: string = 'SEO';
export const K_Comptes: string = 'Comptes';
export const menuItems: IMenuItem[] = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Administration',
        url: '',
        submenu:[
            {
                title: 'Comptes',
                url: K_Comptes,
            }
        ]
    },
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'web design',
                url: K_WebDesign,
            },
            {
                title: 'web development',
                url: 'web-dev',
                submenu: [
                    {
                        title: 'Frontend',
                        url: 'frontend',
                    },
                    {
                        title: 'Backend',
                        url: '',
                        submenu: [
                            {
                                title: 'NodeJS',
                                url: 'node',
                            },
                            {
                                title: 'PHP',
                                url: 'php',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'SEO',
                url: K_SEO,
            },
        ],
    },
    {
        title: 'About',
        url: K_About,
    },
];

export interface IMenuItem
{
    title: string;
    url?: string;
}
export const menuItems: IMenuItem[] = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Services',
        url: '/services',
    },
    {
        title: 'About',
        url: '/about',
    },
];

interface IMenuItem
{
    title: string;
    url: string;
    submenu?: IMenuItem[]
}
export default IMenuItem;

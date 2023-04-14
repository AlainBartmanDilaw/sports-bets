import { Route, Routes } from 'react-router-dom';
import { K_About, K_Comptes, K_SEO, K_WebDesign } from '../menuItems';
import * as myRoutes from '../routes';
import Layout from './Layout';

const App = () => {
    return(
    <>
        <Routes>
            <Route path = "/" element = {<Layout/>}>
                <Route index element={<myRoutes.Home/>}/>
                <Route path={K_About} element={<myRoutes.About/>}/>
                <Route path={K_WebDesign} element={<myRoutes.WebDesign/>}/>
                <Route path={K_SEO} element={<myRoutes.SEO/>}/>
                <Route path={K_Comptes} element={<myRoutes.Comptes/>}/>
            </Route>
        </Routes>
    </>
    );
};

export default App;

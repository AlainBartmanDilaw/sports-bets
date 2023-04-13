import { Route, Routes } from 'react-router-dom';
import { K_About } from '../menuItems';
import About from '../routes/About';
import Home from '../routes/Home';
import Layout from './Layout';

const App = () => {
    return(
    <>
        <Routes>
            <Route path = "/" element = {<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={K_About} element={<About/>}/>
            </Route>
        </Routes>
    </>
    );
};

export default App;

import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.page';
import RQSupperHeroPage from './components/RQSupperHero.page';
import SupperHeroPage from './components/SupperHero.page';

function App() {
  return (
    <div className="App">
      <Link to= '/home'> Home </Link>
      <Link style={{margin:"0px 20px"}} to= '/rq-query'> RQ Query </Link>
      <Link to= '/supper-hero'>Traditional  Supper Hero </Link>

       <Routes>
         <Route path ='/home' element={<HomePage></HomePage>}></Route>
         <Route path ='/rq-query' element={<RQSupperHeroPage></RQSupperHeroPage>}></Route>
         <Route path ='/supper-hero' element={<SupperHeroPage></SupperHeroPage>}></Route>
       </Routes>
    </div>
  );
}

export default App;

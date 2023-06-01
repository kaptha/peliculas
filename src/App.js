import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Peliculas from './pages/Peliculas'
import Login from './pages/Login';
import CheckOut from './pages/CheckOut';
import Address from './pages/Address';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={ <NavBar /> }>
           <Route path='/' element={ <Header/> }/>
           <Route path='/' element={ <Peliculas/> }/>
           <Route path='Login' element={ <Login/> }/>
           <Route path='CheckOut' element={ <CheckOut/> }/>
           <Route path='Address' element={ <Address/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

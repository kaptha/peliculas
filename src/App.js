import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import CheckOut from './pages/CheckOut';
import Address from './pages/Address';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={ <NavBar /> }>
           <Route path='/' element={ <Inicio/> }/>                               
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

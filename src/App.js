
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from  './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
       <Header/>
      <div>
        <Route path='/' exact>
             <Home/>
        </Route>
        <Route path='/cart' >
             <Cart/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

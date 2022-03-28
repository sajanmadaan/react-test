
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import { Products } from './components/Products';
import { EachProduct } from './components/EachProduct';

function App() {
  return (
    <div className="App">
      <Navbar />{" "}
      <Routes>
        <Route path={"/"} element={<Home />}>
          Home
        </Route>
        <Route path={"/about"} element={<About />}>
         About
        </Route>
        <Route path={"/products"} element={<Products/>}>
          Products
        </Route>
        <Route path={"/products/:id"} element={<EachProduct/>}>
          Products
        </Route>
      </Routes>
    </div>
  );
}

export default App;

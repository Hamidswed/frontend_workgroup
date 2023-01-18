import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from './pages/Products';
import Cart from './pages/Cart';
import WishList from "./pages/WishList";

function App() {
  return <div className="App">

  
<Products></Products>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      
      <Route path="/favourite" element={<WishList/>} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes> 
     
    
  {/*  <FavoriteList></FavoriteList> 
 */}

    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>


    </Routes> */}

  </div>;
}
export default App;

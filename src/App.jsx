// implement context api
// react-router-dom implement routing
import {BrowserRouter,Link,Routes,Route } from "react-router-dom"
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Records from "./components/Records";
import Cart from "./components/Cart";
import { useContext } from "react";
import { MyContext } from "./context/context";

function App() {
  const {user} =useContext(MyContext)
  return (
    <BrowserRouter>
      <h1>Record Shop</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {user ?  <li><Link to="/profile">Profile</Link></li>:<>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li></> }
        
        <li><Link to="/records">Records</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/records" element={<Records/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;

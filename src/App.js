import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import PrivateComponents from "./components/PrivateComponents";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>Logout</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

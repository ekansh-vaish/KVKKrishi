import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Authentication/Signup";
import Home from "./Components/Home/Home"
import Login from "./Components/Authentication/Login";
import ManageProduct from "./Components/admin/ManageProduct";
import Dashboard from "./Components/admin/Dashboard";
import Navbar1 from "./Components/Navbar.jsx/Navbar";
import Footer from "./Components/Footer/Footer";
import Network from "./Components/Pages/Network/Network";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Animate from "./Components/Home/Animate";
import Main from "./Components/Home/Main";

function App() {
return (

<BrowserRouter>
<Navbar1/>
<Routes>
<Route path="/product" element={<Main/>} />
<Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login/>} />
<Route path="/Dashboard" element={<Dashboard/>} />
<Route path="/manageproduct" element={<ManageProduct/>} />
<Route path="/network" element={<Network/>} />
<Route path="/aboutus" element={<About/>} />
<Route path="/contactus" element={<Contact/>} />
<Route path="/agri" element={<Home/>} />

</Routes>
<Footer/>
</BrowserRouter>
);
}

export default App;

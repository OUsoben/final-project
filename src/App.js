import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import DashBoardPage from "./pages/DashBoardPage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
       <Header/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" index element= {<HomePage/>}/>
            <Route path="/services" element ={<ServicePage/>}/>
            <Route path="/products" element ={<ProductPage/>}/>
            <Route path="/aboutus" element = {<AboutUsPage/>} />
            <Route path="/dashboard" element =  {<DashBoardPage/>}/>
            <Route path="/products/:id" element = {<ProductDetail/>}/>
            <Route path="*" element = {<NotFoundPage/>}/>
          
        </Routes>
        
      <Footer/>
     </BrowserRouter>

      
    </div>
  );
}

export default App;

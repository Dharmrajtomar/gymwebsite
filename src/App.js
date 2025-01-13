import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./html-code/Header";
import PHeader from "./product/PHeader";
import Form from "./Join-us/Form";
import Signup from "./Join-us/Signup";
import SingleProduct from "./product/SingleProduct";
import AllProductcode from "./product/AllProductcode";
import AllSingleProduct from "./product/AllSingleProduct";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/form" element={<Form/>}/>
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/pheader" element={<AllProductcode/>}/>
        <Route path="/singleproduct/:id" element={<AllSingleProduct/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

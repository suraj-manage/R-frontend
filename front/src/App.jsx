import Navbar from "./pages/layout/navbar";
import { Routes, Route } from "react-router-dom";
//import Home from "./Pages/Home";
//import About from "./Pages/About";
//import Contact from "./Pages/Contact";
import UseState from "./pages/useState";
//import UseEffect from "./Pages/UseEffect";
//import UseMemo from "./Pages/UseMemo";
//import UseRef from "./Pages/UseRef";
//import UseReducer from "./Pages/UseReducer";    
//import UseDispatch from "./Pages/UseDispatch";  
//import UseSelector from "./Pages/UseSelector";
//import Fetch from "./Pages/Fetch";
//import AuthMsg from "./Pages/AuthMsg";
//import Content from "./Pages/Content";
//import Interaction from "./Pages/Interaction";
//import SysSvrErr from "./Pages/SysSvrErr";
//import Redux from "./Pages/Redux";
//import AsyncAwait from "./Pages/AsyncAwait";
//import Profile from "./Pages/Profile";
import './App.css';
import Footer from './pages/layout/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UseState/>}/>
        <Route path="/UseState" element={<UseState />} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App;

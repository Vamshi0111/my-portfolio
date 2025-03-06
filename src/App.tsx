import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Homepage from "./pages/Homepage";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App () {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Homepage/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element = {<Contact/>}/>
            <Route path="/projects" element = {<Projects/>}/>
            <Route path="/Navbar" element = {<Navbar/>}/>
            <Route path="/Footer" element = {<Footer/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App;
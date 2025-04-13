import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Servicesprojects from "./pages/servicesprojects";
import Resume from "./pages/resume";


function App() {
    return (
        <Router basename="/my-portfolio">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/servicesprojects" element={<Servicesprojects />} />
                <Route path="/Navbar" element={<Navbar />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
        </Router>
    )
}
export default App;
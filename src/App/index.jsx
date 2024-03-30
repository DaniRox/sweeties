
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Components/Sections/Home";
import Services from "../Components/Sections/Services";
import Gallery from "../Components/Sections/Gallery";
import Contact from "../Components/Sections/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/servicios", element: <Services /> },
        { path: "/galeria", element: <Gallery /> },
        { path: "/contacto", element: <Contact /> },
    ])

    return routes;
}

const App = () => {
    return (
        <BrowserRouter>
            
            
            <Home />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
        </BrowserRouter>
    )
}

export default App;

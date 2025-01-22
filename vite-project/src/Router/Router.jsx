import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import pages.......................
import Home from "../Pages/Home";
import Notfound from "../Pages/NotFound/NotFound";
//Import Components.......................
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

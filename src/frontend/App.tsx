import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/About";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";
import Support from "./pages/Support";

export default function App() {
  return (
    <>
      <Header />
      <main className="wrapper min-h-dvh space-y-20 pb-20">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

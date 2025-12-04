import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="wrapper min-h-dvh space-y-20 pb-20">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

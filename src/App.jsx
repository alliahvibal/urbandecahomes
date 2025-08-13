import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./css/bootstrap.min.css";
import "./js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Developments from "./pages/Developments.jsx";
import About from "./pages/About";
import Amenities from "./pages/Amenities";
import Contact from "./pages/Contact";
import DecaOrtigas from "./pages/DecaOrtigas";
import DecaCubao from "./pages/DecaCubao";
import DecaLitex from "./pages/DecaLitex";
import DecaManila from "./pages/DecaManila";
import Properties from "./pages/Properties";
import "./App.css";
import "./css/animations.css";
import { useEffect, useLayoutEffect } from "react";
import { initAnimations } from "./utils/animations";

function AppShell() {
  const location = useLocation();
  // Only show footer on these exact paths
  const footerPaths = new Set([
    "/developments",
    "/amenities",
    "/about",
    "/contact",
  ]);
  const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";
  const showFooter = footerPaths.has(normalizedPath);

  // Pre-paint scroll handling for route changes with optional #hash support
  useLayoutEffect(() => {
    // Compute header offset from fixed navbar if present
    const nav = document.querySelector(
      ".portfolio-navbar.navbar, .portfolio-navbar"
    );
    const headerOffset = nav && nav.offsetHeight ? nav.offsetHeight : 80;

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const hash = location.hash && location.hash.trim();
    if (hash && hash.startsWith("#")) {
      const id = hash.slice(1);
      const target = document.getElementById(id);
      const go = (el) => {
        const y =
          el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo(0, Math.max(0, y));
      };
      if (target) {
        go(target);
      } else {
        // Retry on next frame if the section renders after route switch
        requestAnimationFrame(() => {
          const late = document.getElementById(id);
          if (late) go(late);
          else scrollToTop();
        });
      }
    } else {
      scrollToTop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/developments" element={<Developments />} />
        <Route path="/about" element={<About />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deca-ortigas" element={<DecaOrtigas />} />
        <Route path="/deca-cubao" element={<DecaCubao />} />
        <Route path="/deca-litex" element={<DecaLitex />} />
        <Route path="/deca-manila" element={<DecaManila />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  useEffect(() => {
    initAnimations({ deferTypingUntilScroll: true });
    // Prevent browser restoring old scroll positions between navigations
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev || "auto";
      };
    }
  }, []);
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;

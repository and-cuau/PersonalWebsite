import { useState } from "react";
import React from "react";
import "./App.css";

import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe";

function AppContent() {
  const [count, setCount] = useState(0);

  const location = useLocation();
  const homepage = "/home";
  const isWhiteLink = location.pathname === homepage;
  const isInvisibleHome = location.pathname === homepage;

  return (
    <>
      <nav className="p-4 flex gap-4 bg-gray-100">
        <div className="linksflex">

          <Link className = "navname"   to="/home">Andre Cuautle </Link>
          <Link
            className={`link home ${isWhiteLink ? "link-invisible" : "link-black"}`}
            to="/home"
          >
            Home
          </Link>

          <Link
            className={`link projects ${isWhiteLink ? "link-white" : "link-black"}`}
            to="/projects"
          >
            Projects
          </Link>
        </div>
        <div className="test">
           <Link
            className={`link home mobile ${isWhiteLink ? "link-invisible" : "link-black"}`}
            to="/home"
          >
            Home
          </Link>

        </div>
      </nav>

      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

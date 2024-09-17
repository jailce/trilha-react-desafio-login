import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
           <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
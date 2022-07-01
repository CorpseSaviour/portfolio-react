// Libs

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Hobby from "./pages/Hobby";
import NoPage from "./pages/NoPage";

// CSS

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Hobby" element={<Hobby />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header>
      </Header>    
    </BrowserRouter>
  );
}

export default App;
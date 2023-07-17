import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mainpage from "./pages/Mainpage";
import ProductListPage from "./pages/ProductListPage";
import Dropdown from "./components/Dropdown";
import BookmarkListPage from "./pages/BookmarkListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const bookmark = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarkState, setBookmarkState] = useState(bookmark || []);

  return (
      <BrowserRouter>
        <Header setShowDropdown={setShowDropdown} showDropdown={showDropdown}/>
        {showDropdown && <Dropdown />}
        <Footer />
      </BrowserRouter>
  );
}

export default App;
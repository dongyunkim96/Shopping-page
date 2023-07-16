import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mainpage from "./pages/Mainpage";
import ProductList from "./pages/ProductListPage";
import BookmarkList from "./pages/BookmarkListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const bookmark = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarkState, setBookmarkState] = useState(bookmark || []);

  return (
    <>
    <BrowserRouter>
      <Header setShowDropdown={setShowDropdown} />
      {showDropdown && (
        <Dropdown
          setShowDropdown={setShowDropdown}
          showDropdown={showDropdown}
        />
      )}
      <main>
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <Mainpage
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
              />
            }
          />
          <Route
            path="/bookmark"
            element={
              <BookmarkListPage
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
              />
            }
          />
        </Routes>
      </main>
      <Footer />    
    </BrowserRouter>
    </>
  );
}

export default App;
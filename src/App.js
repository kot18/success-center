import React from "react";
import {Route, Routes} from "react-router-dom";

import Main from "./pages/Main";
import News from "./pages/NewsAndArticles";
import Gallery from "./pages/Gallery";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/account" element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
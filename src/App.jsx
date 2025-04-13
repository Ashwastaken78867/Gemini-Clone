import React from "react";
import Home from "./pages/home";
import {BrowserRouter, Route, Routes} from "react-router";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Chat from "./pages/chat";
import Inbox from "./components/inbox";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/about" element={<About />} />
      <Route path="/teams" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/inbox" element={<Inbox />} />


    </Routes>
    </BrowserRouter>
 

  );
};

export default App;